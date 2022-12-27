const { signUp, singIn } = require("../controllers/user/index");

const router = require("express").Router();
router.post("/signup", signUp).post("/signin", singIn);
module.exports = router;
