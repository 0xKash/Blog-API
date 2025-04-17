const { Router } = require("express");

const {
  postPost,
  getAllPosts,
  getPost,
  deletePost,
} = require("../controllers/postController");

//

const postRouter = Router();

postRouter.get("/", getAllPosts);
postRouter.post("/", postPost);

postRouter.get("/:postId", getPost);
postRouter.delete("/:postId", deletePost);

module.exports = postRouter;
