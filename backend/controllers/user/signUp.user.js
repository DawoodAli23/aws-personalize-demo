const { Users } = require("../../database/schemas");
const bcrypt = require("bcrypt");
const createError = require("http-errors");
exports.signUp = async (req, res, next) => {
  try {
    console.log(req.body);
    const { email, password, name, dob, gender } = req.body;
    const hashedPassword = await bcrypt.hash(
      password,
      parseInt(process.env.SALT_ROUNDS)
    );
    const user = await Users.create({
      email,
      password: hashedPassword,
      name,
      dob,
      gender,
    });
    return res.json({
      status: 200,
      message: "User created successfully",
      user,
    });
  } catch (error) {
    next(createError(500, error.message));
  }
};
