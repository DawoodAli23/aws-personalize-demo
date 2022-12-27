const createError = require("http-errors");
const { Products } = require("../../database/schemas/index");
exports.getAllProduct = async (req, res, next) => {
  try {
    const {
      query: { offset, limit },
    } = req;
    const products = await Products.findAndCountAll({
      offset,
      limit,
    });
    return res.json({
      status: 200,
      message: "FOUND",
      data: products,
    });
  } catch (error) {
    next(createError(500, error.message));
  }
};
