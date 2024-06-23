export const errorMiddleware = (err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({
    status: 500,
    message: 'There is something wrong on the server'
  })
}