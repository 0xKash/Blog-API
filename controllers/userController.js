const asyncHandler = require("express-async-handler");
const prisma = require("../db/queries");

exports.getAllUsers = asyncHandler(async (req, res) => {
  const users = await prisma.getAllUsers();

  res.json(users);
});

exports.getUser = asyncHandler(async (req, res) => {
  const user = await prisma.getUser(req.params.userId);

  res.json(user);
});

exports.postUser = asyncHandler(async (req, res) => {
  const user = await prisma.createUser(req.body.username, req.body.password);

  res.json(user);
});

exports.deleteUser = asyncHandler(async (req, res) => {
  const user = await prisma.deleteUser(req.params.userId);

  res.json(user);
});
