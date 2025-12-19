import express from "express";
import {
  createBatch,
  getBatchesByProduct,
  getAllBatches,
} from "../controllers/batchController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", verifyToken, getAllBatches);
router.get("/:productId", verifyToken, getBatchesByProduct);
router.post("/", verifyToken, createBatch);

export default router;
