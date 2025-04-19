const CustomNotFoundError = require("../errors/CustomNotFoundError");
const asyncHandler = require("express-async-handler");

const prisma = require("../db/queries");
const utils = require("../lib/utils");
const CustomNotAuthorizedError = require("../errors/CustomNotAuthorizedError");

exports.getAllUsers = asyncHandler(async (req, res) => {
  const users = await prisma.getAllUsers();

  if (users.length === 0)
    throw new CustomNotFoundError(
      "Users not found",
      "No users exist",
      "Try to create a new user",
      req.originalUrl
    );

  res.json(users);
});

exports.getUser = asyncHandler(async (req, res) => {
  let user;

  req.query.include === "comments"
    ? (user = await prisma.getUserWithComments(req.params.userId))
    : (user = await prisma.getUser(req.params.userId));

  if (!user)
    throw new CustomNotFoundError(
      "User not found",
      `The user with the ID ${req.params.userId} does not exist`,
      "Please check if the user ID is correct",
      req.originalUrl
    );

  res.json(user);
});

exports.postUser = asyncHandler(async (req, res) => {
  const saltHash = utils.genPassword(req.body.password);
  const { salt, hash } = saltHash;

  console.log("ok");

  const user = await prisma.createUser(req.body.username, hash, salt);

  const jwt = utils.issueJWT(user);

  res.json({
    success: true,
    user: user,
    token: jwt.token,
    expiresIn: jwt.expires,
  });
});

exports.loginUser = asyncHandler(async (req, res) => {
  const user = await prisma.getUserByUsername(req.body.username);

  if (!user)
    throw new CustomNotFoundError(
      "User not found",
      `The user with the username ${req.body.username} does not exist`,
      "Please check if the username and password are correct",
      req.originalUrl
    );

  const isValid = utils.validPassword(req.body.password, user.hash, user.salt);

  if (isValid) {
    const tokenObject = utils.issueJWT(user);

    res.json({
      success: true,
      user: user,
      token: tokenObject.token,
      expires: tokenObject.expires,
    });
  } else {
    throw new CustomNotAuthorizedError(
      "You entered the wrong password",
      `${req.body.password} is not the correct password`,
      "Try with another password",
      req.originalUrl
    );
  }
});

exports.deleteUser = asyncHandler(async (req, res) => {
  const user = await prisma.deleteUser(req.params.userId);

  if (!user)
    throw new CustomNotFoundError(
      "User not found",
      `The user with the ID ${req.params.userId} does not exist`,
      "Please check if the user ID is correct",
      req.originalUrl
    );

  res.json(user);
});
