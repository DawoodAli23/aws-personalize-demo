const { getSingleProduct, getAllProduct } = require("../controllers/products");
const { JWT } = require("../middlewares/JWT.middleware");

const router = require("express").Router();
router.get("/:productId", JWT, getSingleProduct).get("/", getAllProduct);
module.exports = router;
