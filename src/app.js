import express from "express";
import { productsRouter } from "./routes/products-route.js";
import { errorMiddleware } from "./middlewares/error-middleware.js";
import { notFound } from "./middlewares/not-found-middleware.js";

export const app = express();
app.use(express.json());

app.use("/api/products", productsRouter);

app.use(errorMiddleware);
app.use(notFound);
