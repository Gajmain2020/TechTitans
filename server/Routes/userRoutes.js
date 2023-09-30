import express from "express";
import {
  signupUser,
  loginUser,
  postComplaint,
  updateUserDetails,
} from "../Controller/userControler.js";
import { userAuth } from "../Middleware/userAuthentication.js";
import { fetchPostsInitially } from "../Controller/borrowerControler.js";

const router = express.Router();

// testing routes

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.get("/fetch-posts", fetchPostsInitially);
router.post("/post-complaint", postComplaint);
router.patch("/update-user-details", updateUserDetails);

export default router;
