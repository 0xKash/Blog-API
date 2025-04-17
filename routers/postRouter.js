const { Router } = require("express");

const {
  createPost,
  getAllPosts,
  getPost,
  deletePost,
  createComment,
  getPostComments,
} = require("../controllers/postController");

//

const postRouter = Router();

postRouter.get("/", getAllPosts);
postRouter.post("/", createPost);

postRouter.get("/:postId", getPost);
postRouter.delete("/:postId", deletePost);

postRouter.get("/:postId/comments", getPostComments);
postRouter.post("/:postId/comments", createComment);

module.exports = postRouter;
