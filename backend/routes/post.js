const router = require("express").Router();
const {
  createPost,
  updatePost,
  deletePost,
  likePost,
  getAPost,
  timeline,
} = require("../controller/post");

//Create a post
router.post("/", createPost);
//update
router.put("/:id", updatePost);
//delete a post
router.delete("/:id", deletePost);
//like a post
router.put("/:id/like", likePost);
//get a post
router.get("/:id", getAPost);
//get timeline post
router.get("/timeline/all", timeline);

module.exports = router;
