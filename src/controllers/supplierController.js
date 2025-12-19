import {
  getAllSuppliers as repoGetAll,
  createSupplier as repoCreate,
} from "../db/supplierRepo.js";

export const getAllSuppliers = async (req, res) => {
  try {
    const suppliers = await repoGetAll();
    res.json(suppliers);
  } catch (err) {
    console.error("getAllSuppliers error:", err);
    res.status(500).json({ error: "Failed to fetch suppliers" });
  }
};

export const createSupplier = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Supplier name is required" });
    }

    const supplier = await repoCreate({
      name,
      email,
      phone,
    });

    res.status(201).json(supplier);
  } catch (err) {
    console.error("createSupplier error:", err);
    res.status(500).json({ error: "Failed to create supplier" });
  }
};
