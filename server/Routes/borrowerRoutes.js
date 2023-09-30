import express from "express";
import {
  postRequirement,
  postComment,
  fetchSinglePost,
} from "../Controller/borrowerControler.js";
import { userAuth } from "../Middleware/userAuthentication.js";

const router = express.Router();

//! need to add middleware while connecting it with frontend

router.get("/fetch-single-post", fetchSinglePost);
router.post("/post-requirement", postRequirement);
router.patch("/comment", postComment);

export default router;
