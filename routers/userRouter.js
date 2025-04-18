const { Router } = require("express");
const {
  getAllUsers,
  getUser,
  createUser,
  deleteUser,
  getUserComments,
} = require("../controllers/userController");

//

const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.post("/", createUser);

userRouter.get("/:userId", getUser);
userRouter.delete("/:userId", deleteUser);

userRouter.get("/:userId/comments", getUserComments);

module.exports = userRouter;
