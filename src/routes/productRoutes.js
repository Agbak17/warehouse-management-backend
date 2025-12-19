import express from "express";
import {
  getAllProducts,
  createProduct,
} from "../controllers/productController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", verifyToken, getAllProducts);
router.post("/", verifyToken, createProduct);

export default router;
