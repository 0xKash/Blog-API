const asyncHandler = require("express-async-handler");
const prisma = require("../db/queries");
const { CustomNotFoundError } = require("../errors/errors");

exports.getAllPosts = asyncHandler(async (req, res) => {
  const posts = await prisma.getAllPosts();

  if (posts.length === 0)
    throw new CustomNotFoundError(
      "Posts not found",
      "No posts exist",
      "Try to create a new post",
      req.originalUrl
    );

  res.status(200).json({ status: "success", data: posts });
});

exports.getPost = asyncHandler(async (req, res) => {
  let post;

  req.query.include === "comments"
    ? (post = await prisma.getPostWithComments(req.params.postId))
    : (post = await prisma.getPost(req.params.postId));

  if (!post)
    throw new CustomNotFoundError(
      "Post not found",
      `The post with the ID ${req.params.postId} does not exist`,
      "Please check if the ID is correct",
      req.originalUrl
    );

  res.status(200).json({ status: "success", data: post });
});

exports.createPost = asyncHandler(async (req, res) => {
  const post = await prisma.createPost(req.body.title, req.body.content);

  res.status(200).json({ status: "success", data: post });
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

  res.status(200).json({ status: "success", data: post });
});

exports.getPostComments = asyncHandler(async (req, res) => {
  const comments = await prisma.getPostComments(req.params.postId);

  if (comments.length === 0)
    throw new CustomNotFoundError(
      "Comments not found",
      "No comments exist",
      `Try to create a new comment or check if a post with the ID ${req.params.postId} exists`,
      req.originalUrl
    );

  res.status(200).json({ status: "success", data: comments });
});

exports.createComment = asyncHandler(async (req, res) => {
  const comment = prisma.createComment(
    req.body.content,
    req.params.postId,
    req.body.userId /* ONLY FOR TESTING */
  );

  res.status(200).json({ status: "success", data: comment });
});
