import {
  getAllOrders as repoGetAll,
  createOrder as repoCreate,
} from "../db/orderRepo.js";

export const getAllOrders = async (req, res) => {
  try {
    const orders = await repoGetAll();
    res.json(orders);
  } catch (err) {
    console.error("getAllOrders error:", err);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
};

export const createOrder = async (req, res) => {
  try {
    const { supplierId, items } = req.body;
    /**
     * items = [
     *   { productId: 1, quantity: 50 },
     *   { productId: 2, quantity: 20 }
     * ]
     */

    if (!supplierId || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({
        error: "supplierId and non-empty items array are required",
      });
    }

    const order = await repoCreate({
      supplierId: Number(supplierId),
      items,
    });

    res.status(201).json(order);
  } catch (err) {
    console.error("createOrder error:", err);
    res.status(500).json({ error: "Failed to create order" });
  }
};
