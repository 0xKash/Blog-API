const asyncHandler = require("express-async-handler");
const prisma = require("../db/queries");

exports.getAllPosts = asyncHandler(async (req, res) => {
  const posts = await prisma.getAllPosts();

  res.json(posts);
});

exports.getPost = asyncHandler(async (req, res) => {
  const post = await prisma.getPost(req.params.postId);

  res.json(post);
});

exports.createPost = asyncHandler(async (req, res) => {
  const post = await prisma.createPost(req.body.title, req.body.content);

  res.json(post);
});

exports.deletePost = asyncHandler(async (req, res) => {
  const post = await prisma.deletePost(req.params.postId);

  res.json(post);
});

exports.getPostComments = asyncHandler(async (req, res) => {
  const comments = await prisma.getPostComments(req.params.postId);

  res.json(comments);
});

exports.createComment = asyncHandler(async (req, res) => {
  const comment = prisma.createComment(req.body.content, req.params.postId);

  res.json(comment);
});
