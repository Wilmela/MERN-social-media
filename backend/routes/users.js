const express = require("express");

const {
  update,
  deleteUser,
  getOne,
  followUser,
  unFollowUser,
} = require("../controller/users");

const router = express.Router();

//Update user
router.put("/:id", update);
//delete user
router.delete("/:id", deleteUser);
//get a user
router.get("/:id", getOne);
//follow a user
router.put("/:id/follow", followUser);
//unFollow a user
router.put("/:id/unfollow", unFollowUser);

module.exports = router;
