import express from "express";
import productController from "../controllers/products-controller.js";

export const productsRouter = express.Router();

productsRouter.post("/", productController.create);
productsRouter.get("/", productController.getAll);
productsRouter.get("/:productId", productController.getById);
productsRouter.put("/:productId", productController.update);
productsRouter.delete("/:productId", productController.remove);
