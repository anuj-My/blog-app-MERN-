const express = require("express");
const {
  getAllPosts,
  createPost,
  getPost,
  updatePost,
  deletePost,
} = require("../controllers/postController");
const { protect, isLoggedIn } = require("../controllers/authConroller");

const router = express.Router();

router.route("/").get(getAllPosts).post(protect, createPost);
router
  .route("/:id")
  .get(getPost)
  .patch(protect, updatePost)
  .delete(protect, deletePost);

module.exports = router;
