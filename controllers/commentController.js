const asyncHandler = require("express-async-handler");
const prisma = require("../db/queries");

exports.getAllComments = asyncHandler(async (req, res) => {
  const comments = await prisma.getAllComments();

  res.json(comments);
});

exports.getComment = asyncHandler(async (req, res) => {
  const comment = await prisma.getComment(req.params.commentId);

  res.json(comment);
});

exports.deleteComment = asyncHandler(async (req, res) => {
  const comment = await prisma.deleteComment(req.params.commentId);

  res.json(comment);
});
