import express from "express";
import { createOrder, getAllOrders } from "../controllers/orderController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", verifyToken, getAllOrders);
router.post("/", verifyToken, createOrder);

export default router;
