import prisma from "./prismaClient.js";

export const getAllSuppliers = () => {
  return prisma.supplier.findMany({
    orderBy: { id: "desc" },
  });
};

export const createSupplier = (data) => {
  return prisma.supplier.create({ data });
};
