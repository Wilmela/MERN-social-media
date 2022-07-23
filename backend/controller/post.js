const Post = require("../models/post");
const User = require("../models/user");
exports.createPost =
  ("/create-post",
  async (req, res) => {
    const post = new Post(req.body);

    try {
      const savedPost = await post.save();
      res.status(200).json(savedPost);
    } catch (error) {
      res.status(500).json(error);
    }
  });

exports.updatePost =
  ("/update-post",
  async (req, res) => {
    const { id } = req.params;

    try {
      const post = await Post.findById(id);
      if (post.userId === req.body.userId) {
        await post.updateOne({ $set: req.body });
        res.status(200).json("Post updated successfully");
      } else {
        res.status(403).json("You can only update your own posts");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

exports.deletePost =
  ("/delete-post",
  async (req, res) => {
    const { id } = req.params;

    try {
      const post = await Post.findById(id);
      if (post.userId === req.body.userId) {
        await post.deleteOne();
        res.status(200).json("Post deleted successfully");
      } else {
        res.status(403).json("You can only delete your own posts");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

exports.likePost =
  ("/like-post",
  async (req, res) => {
    const { id } = req.params;

    try {
      const post = await Post.findById(id);
      if (!post.likes.includes(req.body.userId)) {
        await post.updateOne({ $push: { likes: req.body.userId } });
        res.status(200).json("Post has been liked ");
      } else {
        await post.updateOne({ $pull: { likes: req.body.userId } });
        res.status(200).json("post has been disliked");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

exports.getAPost =
  ("/get-post",
  async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      //   const {createdAt, updatedAt, ...others} = post._doc;
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  });

exports.timeline =
  ("/timeline-post",
  async (req, res) => {
    // let postArray = []
    try {
      const currentUser = await User.findById(req.body.userId);
      const userPosts = await Post.find({ userId: currentUser._id });
      const friendPosts = await Promise.all(
        currentUser.followings.map((friendId) => {
          return Post.find({ userId: friendId });
        })
      );

      res.status(200).json(userPosts.concat(...friendPosts));
    } catch (error) {
      res.status(500).json(error);
    }
  });
