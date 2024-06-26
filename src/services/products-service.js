import { prisma } from "../database.js"
import ResponseError from "../utils/response-error.js"

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
  const result = await prisma.product.findMany()
  if (result.length === 0) {
    throw new ResponseError(200, 'There is no products')
  }
  return result
}

const getById = async (productId) => {
  const result = await prisma.product.findMany({
    where: {
      id: productId
    }
  })
  if (result.length === 0) {
    throw new ResponseError(404, 'Product is not found')
  }
  return result
}

const update = async (product) => {
  const result = await prisma.product.count({
    where: {
      id: product.id
    }
  })
  if (result !== 1) {
    throw new ResponseError(404, 'Product is not found')
  }
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
  const result = await prisma.product.count({
    where: {
      id: product.id
    }
  })
  if (result !== 1) {
    throw new ResponseError(404, 'Product is not found')
  }
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