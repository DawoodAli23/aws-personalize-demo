const createError = require("http-errors");
const {
  Products,
  UserProductIneraction,
} = require("../../database/schemas/index");
exports.getSingleProduct = async (req, res, next) => {
  try {
    const {
      params: { productId: id },
      user: { id: user_id },
    } = req;
    const product = await Products.findOne({
      where: {
        id,
      },
    });
    if (!product) {
      next(createError(404, "Product does not exist"));
    }
    await UserProductIneraction.create({
      user_id,
      product_id: id,
      timestamp: new Date().getTime(),
      eventType: "click",
    });
    return res.json({
      status: 200,
      message: "FOUND",
      data: product,
    });
  } catch (error) {
    next(createError(500, error.message));
  }
};
