const { Router } = require("express");
const {
  getAllComments,
  getComment,
  deleteComment,
} = require("../controllers/commentController");

//

const commentRouter = Router();

commentRouter.get("/", getAllComments);

commentRouter.get("/:commentId", getComment);
commentRouter.delete("/:commentId", deleteComment);

module.exports = commentRouter;
