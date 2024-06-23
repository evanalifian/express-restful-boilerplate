import { prisma } from "../database.js"

const create = async (product) => {
  return await prisma.product.create({
    data: product,
    select: {
      id: true,
      code: true,
      type: true,
      name: true,
      price: true
    }
  })
}

const getAll = async () => {
  return await prisma.product.findMany()
}

const getById = async (productId) => {
  return await prisma.product.findMany({
    where: {
      id: productId
    }
  })
}

const update = async (product) => {
  return await prisma.product.update({
    data: product,
    where: {
      id: product.id
    },
    select: {
      id: true,
      code: true,
      type: true,
      name: true,
      price: true
    }
  })
}

const remove = async (productId) => {
  return await prisma.product.delete({
    where: {
      id: productId
    }
  })
}

export default {
  create,
  getAll,
  getById,
  update,
  remove
}