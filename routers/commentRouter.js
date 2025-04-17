const { Router } = require("express");

//

const commentRouter = Router();

commentRouter.get("/");
commentRouter.post("/");

commentRouter.get("/:postId");
commentRouter.delete("/:postId");

module.exports = commentRouter;
