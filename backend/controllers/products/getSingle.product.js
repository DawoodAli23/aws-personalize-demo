const createError = require("http-errors");
const { Products } = require("../../database/schemas/index");
exports.getSingleProduct = async (req, res, next) => {
  try {
    const {
      params: { productId: id },
      user,
    } = req;
    const product = await Products.findOne({
      where: {
        id,
      },
    });
    if (!product) {
      next(createError(404, "Product doesnot exist"));
    }
    return res.json({
      status: 200,
      message: "FOUND",
      data: product,
    });
  } catch (error) {
    next(createError(500, error.message));
  }
};
