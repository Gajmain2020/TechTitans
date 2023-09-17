import express from "express";
import { postRequirement } from "../Controller/borrowerControler.js";
import { userAuth } from "../Middleware/userAuthentication.js";

const router = express.Router();

router.post("/post-requirement", userAuth, postRequirement);

export default router;
