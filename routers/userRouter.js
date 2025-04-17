const { Router } = require("express");
const {
  getAllUsers,
  getUser,
  postUser,
  deleteUser,
} = require("../controllers/userController");

//

const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.post("/", postUser);

userRouter.get("/:userId", getUser);
userRouter.delete("/:userId", deleteUser);

module.exports = userRouter;
