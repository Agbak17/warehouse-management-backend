import prisma from "./prismaClient.js";

export const getAllLocations = () => {
  return prisma.location.findMany({
    orderBy: { name: "asc" },
  });
};

export const createLocation = ({ name, locationType }) => {
  return prisma.location.create({
    data: { name, locationType },
  });
};
