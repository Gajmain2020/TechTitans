import express from "express";
import {
  signupUser,
  loginUser,
  postComplaint,
  test,
} from "../Controller/commonControler.js";
import { userAuth } from "../Middleware/userAuthentication.js";

const router = express.Router();

// testing routes
router.get("/test", userAuth, test);

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/post-complaint", postComplaint);

export default router;
