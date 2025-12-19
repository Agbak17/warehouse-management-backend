import express from "express";
import {
  getAllSuppliers,
  createSupplier,
} from "../controllers/supplierController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", verifyToken, getAllSuppliers);
router.post("/", verifyToken, createSupplier);

export default router;
