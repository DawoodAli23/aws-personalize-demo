const {} = require("../../database/schemas");
const bcrypt = require("bcrypt");
module.exports.signUp = async (req, res, next) => {
  try {
    // const { email, password, name, dob, gender } = req.body;
    const hashedPassword = await bcrypt.hash(
      "password",
      parseInt(process.env.SALT_ROUNDS)
    );
    // const user = await Users
  } catch (error) {
    // return res.json({
    //   status: 500,
    //   message: error.message,
    // });
    console.log("========>", error.message);
  }
};
