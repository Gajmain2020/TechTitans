import express from "express";
import { showInterest } from "../Controller/lenderControler.js";

const router = express.Router();

router.get("/show-interest", showInterest);

export default router;
