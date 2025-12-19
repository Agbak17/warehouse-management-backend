import prisma from "./prismaClient.js";

export const createStockMovementRecord = (data) => {
  return prisma.stockMovement.create({ data });
};

export const getStockMovements = () => {
  return prisma.stockMovement.findMany({
    include: {
      product: true,
      batch: true,
      fromLocation: true,
      toLocation: true,
    },
    orderBy: { timestamp: "desc" },
  });
};
