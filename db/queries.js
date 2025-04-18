const { PrismaClient } = require("@prisma/client");

const handlePrismaError = require("../errors/HandlePrismaError");
const prisma = new PrismaClient();

//

exports.getAllUsers = async () => {
  try {
    return await prisma.user.findMany({});
  } catch (err) {
    handlePrismaError(err);
  }
};

exports.getUser = async (userId) => {
  try {
    return await prisma.user.findUnique({
      where: {
        id: parseInt(userId),
      },
    });
  } catch (err) {
    handlePrismaError(err);
  }
};

exports.createUser = async (username, password) => {
  try {
    return await prisma.user.create({
      data: {
        username: username,
        password: password,
      },
    });
  } catch (err) {
    handlePrismaError(err);
  }
};

exports.deleteUser = async (userId) => {
  try {
    return prisma.user.delete({
      where: {
        id: parseInt(userId),
      },
    });
  } catch (err) {
    handlePrismaError(err);
  }
};

//

exports.getAllPosts = async () => {
  try {
    return await prisma.post.findMany({});
  } catch (err) {
    handlePrismaError(err);
  }
};

exports.getPost = async (postId) => {
  try {
    return await prisma.post.findUnique({
      where: {
        id: parseInt(postId),
      },
    });
  } catch (err) {
    handlePrismaError(err);
  }
};

exports.createPost = async (title, content) => {
  try {
    return await prisma.post.create({
      data: {
        title: title,
        content: content,
      },
    });
  } catch (err) {
    handlePrismaError(err);
  }
};

exports.deletePost = async (postId) => {
  try {
    return await prisma.post.delete({
      where: {
        id: parseInt(postId),
      },
    });
  } catch (err) {
    handlePrismaError(err);
  }
};

//

exports.getAllComments = async () => {
  try {
    return await prisma.comment.findMany({});
  } catch (err) {
    handlePrismaError(err);
  }
};

exports.getComment = async (commentId) => {
  try {
    return await prisma.comment.findUnique({
      where: {
        id: parseInt(commentId),
      },
    });
  } catch (err) {
    handlePrismaError(err);
  }
};

exports.deleteComment = async (commentId) => {
  try {
    return await prisma.comment.delete({
      where: {
        id: parseInt(commentId),
      },
    });
  } catch (err) {
    handlePrismaError(err);
  }
};

//

exports.getPostComments = async (postId) => {
  try {
    return await prisma.comment.findMany({
      where: {
        postId: parseInt(postId),
      },
    });
  } catch (err) {
    handlePrismaError(err);
  }
};

exports.createComment = async (content, postId, userId) => {
  try {
    return await prisma.comment.create({
      data: {
        content: content,
        post: {
          connect: { id: parseInt(postId) },
        },
        author: {
          connect: { id: parseInt(userId) },
        },
      },
    });
  } catch (err) {
    handlePrismaError(err);
  }
};
