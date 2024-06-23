import productService from "../services/products-service.js"

const create = async (req, res, next) => {
  try {
    const result = await productService.create(req.body)
    res.status(200).json({
      data: result
    })
  } catch (error) {
    next(error)
  }
}

const getAll = async (req, res, next) => {
  try {
    const result = await productService.getAll()
    res.status(200).json({
      data: result
    })
  } catch (error) {
    next(error)
  }
}

const getById = async (req, res, next) => {
  try {
    const result = await productService.getById(parseInt(req.params.productId))
    res.status(200).json({
      data: result
    })
  } catch (error) {
    next(error)
  }
}

const update = async (req, res, next) => {
  try {
    const result = await productService.update(req.body)
    res.status(200).json({
      data: result
    })
  } catch (error) {
    next(error)
  }
}

const remove = async (req, res, next) => {
  try {
    const result = await productService.remove(parseInt(req.params.productId))
    res.status(200).json({
      data: result
    })
  } catch (error) {
    next(error)
  }
}

export default {
  create,
  getAll,
  getById,
  update,
  remove
}