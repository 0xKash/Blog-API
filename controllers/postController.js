const asyncHandler = require("express-async-handler");
const prisma = require("../db/queries");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

exports.getAllPosts = asyncHandler(async (req, res) => {
  const posts = await prisma.getAllPosts();

  res.json(posts);
});

exports.getPost = asyncHandler(async (req, res) => {
  const post = await prisma.getPost(req.params.postId);

  if (!post)
    throw new CustomNotFoundError(
      "Post not found",
      `The post with the ID ${req.params.postId} does not exist`,
      "Please check if the ID is correct",
      req.originalUrl
    );

  res.json(post);
});

exports.createPost = asyncHandler(async (req, res) => {
  const post = await prisma.createPost(req.body.title, req.body.content);

  res.json(post);
});

exports.deletePost = asyncHandler(async (req, res) => {
  const post = await prisma.deletePost(req.params.postId);

  if (!post)
    throw new CustomNotFoundError(
      "Post not found",
      `The post with the ID ${req.params.postId} does not exist`,
      "Please check if the ID is correct",
      req.originalUrl
    );

  res.json(post);
});

exports.getPostComments = asyncHandler(async (req, res) => {
  const comments = await prisma.getPostComments(req.params.postId);

  res.json(comments);
});

exports.createComment = asyncHandler(async (req, res) => {
  const comment = prisma.createComment(
    req.body.content,
    req.params.postId,
    req.body.userId /* ONLY FOR TESTING */
  );

  res.json(comment);
});
