import prisma from "./prismaClient.js";

export const getAllOrders = () => {
  return prisma.order.findMany({
    include: {
      supplier: true,
      items: {
        include: { product: true },
      },
    },
    orderBy: { createdAt: "desc" },
  });
};

export const createOrder = async ({ supplierId, items }) => {
  return prisma.order.create({
    data: {
      supplierId,
      items: {
        create: items.map((item) => ({
          productId: Number(item.productId),
          quantity: Number(item.quantity),
        })),
      },
    },
    include: {
      supplier: true,
      items: {
        include: { product: true },
      },
    },
  });
};
