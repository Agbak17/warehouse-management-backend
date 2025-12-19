import prisma from "./prismaClient.js";

export const createBatch = (data) => {
  return prisma.batch.create({ data });
};

export const getBatchesByProduct = (productId) => {
  return prisma.batch.findMany({
    where: { productId: Number(productId) },
    orderBy: { expiryDate: "asc" },
  });
};

export const findBatchById = (batchId) => {
  return prisma.batch.findUnique({
    where: { id: Number(batchId) },
  });
};

export const updateBatchQuantity = async (batchId, newQuantity) => {
  return prisma.batch.update({
    where: { id: Number(batchId) },
    data: { quantity: newQuantity },
  });
};

export const getAllBatches = async () => {
  return prisma.batch.findMany({
    include: { product: true },
    orderBy: { expiryDate: "asc" },
  });
};
