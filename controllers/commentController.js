const asyncHandler = require("express-async-handler");
const prisma = require("../db/queries");
const { CustomNotFoundError } = require("../errors/errors");

exports.getAllComments = asyncHandler(async (req, res) => {
  const comments = await prisma.getAllComments();

  if (comments.length === 0)
    throw new CustomNotFoundError(
      "Comments not found",
      "No comments exist",
      "Try to create a new comment",
      req.originalUrl
    );

  res.status(200).json({ status: "success", data: comments });
});

exports.getComment = asyncHandler(async (req, res) => {
  const comment = await prisma.getComment(req.params.commentId);

  if (!comment)
    throw new CustomNotFoundError(
      "Comment not found",
      `The comment with the ID ${req.params.commentId} does not exist`,
      "Please check if the ID is correct",
      req.originalUrl
    );

  res.status(200).json({ status: "success", data: comment });
});

exports.deleteComment = asyncHandler(async (req, res) => {
  const comment = await prisma.deleteComment(req.params.commentId);

  if (!comment)
    throw new CustomNotFoundError(
      "Comment not found",
      `The comment with the ID ${req.params.commentId} does not exist`,
      "Please check if the ID is correct",
      req.originalUrl
    );

  res.status(200).json({ status: "success", data: comment });
});
