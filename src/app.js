import express from "express"
import { APIRouter } from "./routes/api-route.js"
import { errorMiddleware } from "./middlewares/error-middleware.js"
import { notFound } from "./middlewares/not-found-middleware.js"

export const app = express()
app.use(express.json())

app.use(APIRouter)

app.use(errorMiddleware)
app.use(notFound)