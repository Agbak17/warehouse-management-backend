import { findBatchById, updateBatchQuantity } from "../db/batchRepo.js";
import {
  createStockMovementRecord,
  getStockMovements as repoGetMovements,
} from "../db/stockRepo.js";

export const getStockMovementsService = () => {
  return repoGetMovements();
};

export const createStockMovementService = async (payload) => {
  const {
    productId,
    batchId,
    quantity,
    movementType, // "INBOUND" | "OUTBOUND" | "INTERNAL"
    fromLocationId,
    toLocationId,
  } = payload;

  const qty = Number(quantity);
  if (!productId || !movementType || !qty || qty <= 0) {
    throw new Error(
      "productId, movementType and positive quantity are required"
    );
  }

  // For now we require a batch for INBOUND/OUTBOUND (you can relax this later)
  let batch = null;
  if (batchId) {
    batch = await findBatchById(batchId);
    if (!batch) {
      throw new Error("Batch not found");
    }
  }

  // Adjust quantity for INBOUND / OUTBOUND
  if (movementType === "INBOUND") {
    if (!batch) throw new Error("Batch is required for INBOUND movement");
    const newQty = (batch.quantity ?? 0) + qty;
    await updateBatchQuantity(batch.id, newQty);
  } else if (movementType === "OUTBOUND") {
    if (!batch) throw new Error("Batch is required for OUTBOUND movement");
    const newQty = (batch.quantity ?? 0) - qty;
    if (newQty < 0) {
      throw new Error("Cannot move more stock than available in batch");
    }
    await updateBatchQuantity(batch.id, newQty);
  }
  // INTERNAL: no change in quantity, just track locations

  const movement = await createStockMovementRecord({
    productId: Number(productId),
    batchId: batchId ? Number(batchId) : null,
    fromLocationId: fromLocationId ? Number(fromLocationId) : null,
    toLocationId: toLocationId ? Number(toLocationId) : null,
    quantity: qty,
    movementType,
  });

  return movement;
};
