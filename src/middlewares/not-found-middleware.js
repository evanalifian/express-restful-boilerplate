export const notFound = (req, res, next) => {
  res.status(404).json({
    status: 404,
    message: "API endpoint is not available",
  });
};
