const User = require("../models/User");
module.exports.signUpService = async (userInfo) => {
  try {
    const user = await User.create(userInfo);
    return user;
  } catch (err) {}
};

module.exports.findUserByEmailService = async (email) => {
  try {
    return await User.findOne({ email });
  } catch (err) {}
};

module.exports.findUserByIdService = async (token) => {
  try {
    return await User.findOne({ confirmationToken: token });
  } catch (err) {}
};
