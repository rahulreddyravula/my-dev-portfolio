const errorHandler = (err, req, res, next) => {
  // Log the internal error detail on the server console
  console.error(err.stack || err);

  const status = err.statusCode || 500;

  // Render a clean response, preventing exposure of internal database paths or server paths
  res.status(status).json({
    success: false,
    message: status === 500 ? 'Unable to process your request.' : err.message
  });
};

export default errorHandler;
