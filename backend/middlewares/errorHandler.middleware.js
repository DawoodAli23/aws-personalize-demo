exports.errorHandler = async (error, req, res, next) => {
  const status = error.status || 400;
  return res.status(status).send({ message: error.message });
};
