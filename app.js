require("dotenv").config();
const express = require("express");
const passport = require("passport");
const cors = require("cors");

require("./config/passport")(passport);

const userRouter = require("./routers/userRouter");
const postRouter = require("./routers/postRouter");
const commentRouter = require("./routers/commentRouter");

//

const app = express();

app.use(cors());

app.use(express.json());
app.set(express.urlencoded({ extended: true }));

app.use(passport.initialize());

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.statusCode || 500).send(err);
});

app.listen(process.env.PORT, (req, res) =>
  console.log(`Listening on PORT: ${process.env.PORT}`)
);
