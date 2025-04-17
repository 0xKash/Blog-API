require("dotenv").config();
const express = require("express");
const session = require("express-session");

const path = require("node:path");

//

const app = express();

app.set(express.urlencoded({ extended: true }));

app.get("/users", (req, res) => {
  res.send("ok");
});

app.listen(process.env.PORT, (req, res) =>
  console.log(`Listening on PORT: ${process.env.PORT}`)
);
