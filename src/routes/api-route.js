import express from "express"
import productController from "../controllers/products-controller.js"

export const APIRouter = express.Router()

APIRouter.post('/api/products', productController.create)
APIRouter.get('/api/products', productController.getAll)
APIRouter.get('/api/products/:productId', productController.getById)
APIRouter.put('/api/products', productController.update)
APIRouter.delete('/api/products/:productId', productController.remove)