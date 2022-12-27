const { getSingleProduct, getAllProduct } = require("../controllers/products");

const router = require("express").Router();
router.get("/:productId", getSingleProduct).get("/", getAllProduct);
module.exports = router;
