const jwt = require("jsonwebtoken");

module.exports.generateToken = (userInfo) => {
  const payload = {
    email: userInfo.email,
    id: userInfo._id,
    role: userInfo.role,
  };
  const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: "30s",
  });
  return token;
};
