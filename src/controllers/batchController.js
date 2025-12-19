import {
  createBatch as repoCreateBatch,
  getBatchesByProduct as repoGetBatchesByProduct,
  getAllBatches as repoGetAllBatches,
} from "../db/batchRepo.js";

export const createBatch = async (req, res) => {
  try {
    const { productId, batchNumber, expiryDate, quantity } = req.body;

    if (!productId || !batchNumber || !expiryDate) {
      return res.status(400).json({
        error: "productId, batchNumber and expiryDate are required",
      });
    }

    const batch = await repoCreateBatch({
      productId: Number(productId),
      batchNumber,
      expiryDate: new Date(expiryDate),
      quantity: quantity ?? 0,
    });

    res.status(201).json(batch);
  } catch (err) {
    console.error("createBatch error:", err);
    res.status(500).json({ error: "Failed to create batch" });
  }
};

export const getBatchesByProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const batches = await repoGetBatchesByProduct(productId);
    res.json(batches);
  } catch (err) {
    console.error("getBatchesByProduct error:", err);
    res.status(500).json({ error: "Failed to fetch batches" });
  }
};

export const getAllBatches = async (req, res) => {
  try {
    const batches = await repoGetAllBatches();
    res.json(batches);
  } catch (err) {
    console.error("getAllBatches error:", err);
    res.status(500).json({ error: "Failed to fetch batches" });
  }
};
