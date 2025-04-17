const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//

exports.getAllUsers = async () => {
  return await prisma.user.findMany({});
};

exports.getUser = async (userId) => {
  return await prisma.user.findUnique({
    where: {
      id: parseInt(userId),
    },
  });
};

exports.createUser = async (username, password) => {
  return await prisma.user.create({
    data: {
      username: username,
      password: password,
    },
  });
};

exports.deleteUser = async (userId) => {
  return prisma.user.delete({
    where: {
      id: parseInt(userId),
    },
  });
};

//

exports.getAllPosts = async () => {
  return await prisma.post.findMany({});
};

exports.getPost = async (postId) => {
  return await prisma.post.findUnique({
    where: {
      id: parseInt(postId),
    },
  });
};

exports.createPost = async (title, content) => {
  return await prisma.post.create({
    data: {
      title: title,
      content: content,
    },
  });
};

exports.deletePost = async (postId) => {
  return await prisma.post.delete({
    where: {
      id: parseInt(postId),
    },
  });
};

//

exports.getAllComments = async () => {
  return await prisma.comment.findMany({});
};

exports.getComment = async (commentId) => {
  return await prisma.comment.findUnique({
    where: {
      id: parseInt(commentId),
    },
  });
};
