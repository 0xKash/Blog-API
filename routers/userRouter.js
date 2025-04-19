const { Router } = require("express");
const {
  getAllUsers,
  getUser,
  postUser,
  deleteUser,
  loginUser,
} = require("../controllers/userController");

const passport = require("passport");

//

const userRouter = Router();

userRouter.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  getAllUsers
);
userRouter.post("/", postUser);

userRouter.post("/login", loginUser);
userRouter.get("/login", (req, res) => res.send("get"));

userRouter.get("/:userId", getUser);
userRouter.delete("/:userId", deleteUser);

module.exports = userRouter;

//eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE5LCJpYXQiOjE3NDUwNzg1ODY1MTMsImV4cCI6MTc0NTA3ODY3MjkxM30.nq6V-W9BxvDlZ9lVvxmROnUJ8DgS1S2SYKQ3Rg_HHzAHssbvvmy5Gvl8aY75cuBse7PK4chKv0r_d-PykrU47OA59qBPIvBtAnI3oWbxFn-CJ3RBKybVPSbcrvudUaQ2Ocf_0rRVwpunSs3bQtopun4Ep6y7Axm5FfT0IMt1iNLMIObaeFmZH2kP69Ze3S7tueBnqba-Uy9IeqxMM3ZqnGQ4PrU-nqHErUexeQGyuhHR9pSWmn30_ZDHiqc4LjPXyOqfr0Jbo0b4uWq9cX8mOCBqym4xNoXkxXjsYfUR1MczQjQMDmPUjFFzy_-3lHR4sxih6qotvYAnNjCWpxSUfJyBUKPgCJVS2guFd7QN89HUThVZ_2qR9BCzCqS-dE4JLw4oi45Y9H8CCE6Vu3YkwJEyTKfZMr9RYerwzGeKq8tsj6-RZRgFEJsgFqBNs39BGfq8UpwLVDBHTcwkwnAJ_uPGtpsi9SeRF8YYAEa-wHxuFqvQXxndS01La_S8QfxBzj8qvfYqlCsyZnDvT0hofzvspXfaK13fcE3aBgo5AXMhFBH-zTJCFi2MnPdYy61AHAVRb_jzaSdpKekAVMZYT2Ic0uj3sT1SAMIzJDfol4yjPwOxDR4YVWafc8An3p-tfFEXIERQ_KyUxFPPfkezMmhiKMrceqeaeTArUrrBODI
//eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE5LCJpYXQiOjE3NDUwNzg2MDc1MTMsImV4cCI6MTc0NTA3ODY5MzkxM30.k4KHFidjRNrrHp9aixiVvo7gHy2UTboaCMLJP8MruM_pe_KcHYKUnYElyQcHYf509MzkWUG0xZSjCc-lG0hmxEFMA4N8M_HQLtqTdPJWp_r32A1HdEnsf44O5izZ0X3i9sVvBZjACqmpGoTfI_uIXMeRoyHUaFldtX1OhMi1WL5S6o6jIPAPzswjbNsiQMX0XiahIyEvB9AFYYlPzqQq5tI5L2PP9IbGBJlu0e4o8-b5B1o9aovyeDizhyCBR2qaSKJDhA46KdIv3nFGYg5IvpF94-Y8c6EgmZkM-maaB6noH93fyTFSfp7kecolWzVQqPH64741g8lJqMXN8clKew6kMrhpy6RIJDWn2ihHBfTWUkgf9PercoTRdpprCD59ekG_YoScoak-bwNbybfg7XoDN31VbGfX8mLxrA6s08VSpgpwhiu1TCzFz-ridpK9coTweWd_XqXk9-xTNovw18_7q7tWAUfHlWUihpFowJDaHuUSwuZSK8RKgaQZ1DwbR_GS0IDC6ybAUT0L9XQsLRpTsf3ct8I-kCuWWb5s6wSkw1M6v--zY3y2Jw10RlvuXAhnux1EmMeVvS8ncgCfDgPrsCCNKsDa6nX7dn4C1fG3Oz1C6AcwVyuyq9sI38Bsczjlp_M0-GE7tYb_nTKGizPp4NyYo4fFzwTyZIGv8LU
