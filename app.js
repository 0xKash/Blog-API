require("dotenv").config();
const express = require("express");
const userRouter = require("./routers/userRouter");
const postRouter = require("./routers/postRouter");
const commentRouter = require("./routers/commentRouter");
const handlePrismaError = require("./errors/HandlePrismaError");

//

const app = express();

app.use(express.json());
app.set(express.urlencoded({ extended: true }));

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

app.use((err, req, res, next) => {
  handlePrismaError(err);
  res.status(err.statusCode || 500).send(err);
});

app.listen(process.env.PORT, (req, res) =>
  console.log(`Listening on PORT: ${process.env.PORT}`)
);
