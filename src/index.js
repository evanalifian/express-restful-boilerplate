import dotenv from 'dotenv'
import { app } from './app.js'
import { logger } from './logger.js'

// Tentukan environment
const ENV = process.env.NODE_ENV || 'development'

// Muat file .env yang sesuai dengan environment
if (ENV === 'production') {
  dotenv.config({ path: '.env.prod' })
} else {
  dotenv.config({ path: '.env' })
}

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  logger.info(`Server running in ${ENV} mode on port ${PORT}`)
})