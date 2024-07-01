import { prisma } from "../database";

export async function fetchAllProducts() {
  return await prisma.product.findMany();
}

export async function fetchAllProductsById() {
  return await prisma.product.findMany({
    where: {
      id: 17,
    },
  });
}
