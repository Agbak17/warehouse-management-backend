import {
  getAllProducts as repoGetAll,
  createProduct as repoCreate,
} from "../db/productRepo.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await repoGetAll();
    res.json(products);
  } catch (err) {
    console.error("getAllProducts error:", err);
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, brand, category, barcode, description } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }

    const product = await repoCreate({
      name,
      brand,
      category,
      barcode,
      description,
    });

    res.status(201).json(product);
  } catch (err) {
    console.error("createProduct error:", err);
    // likely barcode unique violation
    res.status(500).json({ error: "Failed to create product" });
  }
};
