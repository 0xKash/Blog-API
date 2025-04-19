const { Router } = require("express");
const isAuth = require("../lib/authMiddlewares");
const {
  getAllComments,
  getComment,
  deleteComment,
} = require("../controllers/commentController");

//

const commentRouter = Router();

commentRouter.get("/", isAuth, getAllComments);

commentRouter.get("/:commentId", isAuth, getComment);
commentRouter.delete("/:commentId", isAuth, deleteComment);

module.exports = commentRouter;
