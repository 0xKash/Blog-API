const { Router } = require("express");

const {
  createPost,
  getAllPosts,
  getPost,
  deletePost,
  createComment,
  getPostComments,
} = require("../controllers/postController");
const isAuth = require("../lib/authMiddlewares");

//

const postRouter = Router();

postRouter.get("/", isAuth, getAllPosts);
postRouter.post("/", isAuth, createPost);

postRouter.get("/:postId", isAuth, getPost);
postRouter.delete("/:postId", isAuth, deletePost);

postRouter.get("/:postId/comments", isAuth, getPostComments);
postRouter.post("/:postId/comments", isAuth, createComment);

module.exports = postRouter;
