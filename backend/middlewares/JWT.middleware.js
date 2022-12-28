const jwt = require("jsonwebtoken");
exports.JWT = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const decodeInformation = jwt.decode(authorization);
    req.user = decodeInformation.user;
    next();
  } catch (error) {
    next(new Error("WRONG JWT"));
  }
};
