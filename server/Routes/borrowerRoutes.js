import express from "express";
import {
  postRequirement,
  postComment,
  fetchPostsInitially,
} from "../Controller/borrowerControler.js";
import { userAuth } from "../Middleware/userAuthentication.js";

const router = express.Router();

router.get("/fetch-post", userAuth, fetchPostsInitially);
router.post("/post-requirement", userAuth, postRequirement);
router.patch("/comment", userAuth, postComment);

export default router;
