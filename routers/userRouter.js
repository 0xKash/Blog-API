const { Router } = require("express");
const {
  getAllUsers,
  getUser,
  postUser,
  deleteUser,
  loginUser,
} = require("../controllers/userController");
const isAuth = require("../lib/authMiddlewares");

//

const userRouter = Router();

userRouter.get("/", isAuth, getAllUsers);
userRouter.post("/", postUser);

userRouter.post("/login", loginUser);

userRouter.get("/:userId", isAuth, getUser);
userRouter.delete("/:userId", isAuth, deleteUser);

module.exports = userRouter;
