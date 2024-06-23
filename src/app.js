import express from "express"
import { APIRouter } from "./routes/api-route.js"
import { errorMiddleware } from "./middleware/error-middleware.js"
import { notFound } from "./middleware/not-found-middleware.js"

export const app = express()
app.use(express.json())

app.use(APIRouter)

app.use(errorMiddleware)
app.use(notFound)