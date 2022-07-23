const User = require("../models/user");
const bcrypt = require("bcrypt");

exports.create =
  ("/users-create",
  async (req, res) => {
    await res.send("Hello from the other side");
  });

exports.update =
  ("/user-update",
  async (req, res) => {
    // const { userId, password } = req.body;
    // const { id } = req.params;

    if (req.body.userId === req.params.id || req.body.isAdmin) {
      if (req.body.password) {
        try {
          const salt = await bcrypt.genSalt(10);
          req.body.password = await bcrypt.hash(req.body.password, salt);
        } catch (error) {
          res.status(500).json(error);
        }
      }

      try {
        await User.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.status(200).json("Account updated");
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      return res.status(403).json("You can only update your account");
    }
  });

exports.deleteUser =
  ("/user-delete",
  async (req, res) => {
    const { userId, isAdmin } = req.body;
    const { id } = req.params;

    if (userId === id || isAdmin) {
      try {
        await User.findByIdAndDelete(id);
        res.status(200).json("Account deleted");
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(403).json("You can only delete your account");
    }
  });

exports.getOne =
  ("/get-user",
  async (req, res) => {
    const { id } = req.params;

    try {
      const user = await User.findById(id);

      const { password, updatedAt, ...others } = user._doc;
      res.status(200).json(others);
    } catch (error) {
      res.status(500).json({ error: "User does not exist" });
    }
  });

exports.followUser =
  ("/follow-user",
  async (req, res) => {
    const { id } = req.params;
    const { userId } = req.body;

    if (userId !== id) {
      try {
        const user = await User.findById(id);
        const currentUser = await User.findById(userId);

        if (!user.followers.includes(userId)) {
          //Array of followers
          await user.updateOne({ $push: { followers: userId } });
          await currentUser.updateOne({ $push: { followings: id } });

          res.status(200).json("user has been followed");
        } else {
          res.status(403).json("You already follow this user");
        }
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("You can not follow yourself");
    }
  });

exports.unFollowUser =
  ("/unfollow-user",
  async (req, res) => {
    const { id } = req.params;
    const { userId } = req.body;

    if (userId !== id) {
      try {
        const user = await User.findById(id);
        const currentUser = await User.findById(userId);

        if (user.followers.includes(userId)) {
          //Array of followers
          await user.updateOne({ $pull: { followers: userId } });
          await currentUser.updateOne({ $pull: { followings: id } });

          res.status(200).json("user has been unfollwed");
        } else {
          res.status(403).json("You don't follow this user");
        }
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("You can not unfollow yourself");
    }
  });
