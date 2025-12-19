import {
  getStockMovementsService,
  createStockMovementService,
} from "../services/stockService.js";

export const getStockMovements = async (req, res) => {
  try {
    const movements = await getStockMovementsService();
    res.json(movements);
  } catch (err) {
    console.error("getStockMovements error:", err);
    res.status(500).json({ error: "Failed to fetch stock movements" });
  }
};

export const createStockMovement = async (req, res) => {
  try {
    const movement = await createStockMovementService(req.body);
    res.status(201).json(movement);
  } catch (err) {
    console.error("createStockMovement error:", err);
    res.status(400).json({ error: err.message || "Failed to create movement" });
  }
};
