import express from "express";
import {
  createStockMovement,
  getStockMovements,
} from "../controllers/stockController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", verifyToken, getStockMovements);
router.post("/", verifyToken, createStockMovement);

export default router;
