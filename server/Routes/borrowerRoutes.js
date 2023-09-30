import express from "express";
import {
  postRequirement,
  postComment,
  fetchPostsInitially,
} from "../Controller/borrowerControler.js";
import { userAuth } from "../Middleware/userAuthentication.js";

const router = express.Router();

//! need to add middleware while connecting it with frontend

router.post("/post-requirement", postRequirement);
router.patch("/comment", postComment);

export default router;
