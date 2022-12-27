const { Users } = require("../../database/schemas");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const createError = require("http-errors");
exports.singIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({
      where: {
        email,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    if (!user) {
      next(createError("User does not exist please sign up!"));
    }
    const passwordFlag = await bcrypt.compare(
      password,
      user.dataValues.password
    );
    if (!passwordFlag) {
      next(createError("Incorrect Email or Password, Please try again!"));
    }
    const token = jwt.sign({ user: user.dataValues }, process.env.PRIVATE_KEY);
    delete user.dataValues.password;
    return res.json({
      status: 200,
      token,
      user: user.dataValues,
    });
  } catch (error) {
    next(createError(500, error.message));
  }
};
