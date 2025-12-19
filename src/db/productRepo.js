import prisma from "./prismaClient.js";

export const getAllProducts = () => {
  return prisma.product.findMany({
    include: {
      batches: true, // so you can see stock per batch
    },
    orderBy: { createdAt: "desc" },
  });
};

export const createProduct = (data) => {
  return prisma.product.create({ data });
};
