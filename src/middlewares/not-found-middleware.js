export const notFound = (req, res, next) => {
  res.status(404).json({
    status: 404,
    message: 'Path is not available'
  })
}