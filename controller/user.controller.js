const {
  signUpService,
  findUserByEmailService,
} = require("../services/user.services");
const { generateToken } = require("../utils/Token");

module.exports.signUp = async (req, res) => {
  try {
    const user = await signUpService(req.body);
    res
      .status(200)
      .json({ status: "success", message: "successfully signed up" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(401).json({ message: "Please provide email and password" });
    }
    const user = await findUserByEmailService(email);
    if (!user) {
      return res
        .status(401)
        .json({ status: "fail", error: "please provide your credentials" });
    }
    const isPasswordValid = user.comparePassword(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ status: "fail", error: "user name and password didn't match" });
    }
    if (user.status !== "active") {
      return res.status(401).json({
        status: "fail",
        error: "please confirm your email address",
      });
    }

    const token = generateToken(user);
    const { password: pwd, ...others } = user.toObject();
    res.status(200).json({
      status: "success",
      message: "succesfully logged in",
      data: { user: others, token },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.getMe = async (req, res) => {
  try {
    const user = await findUserByEmail(req.user?.email);
    res.send(user);
  } catch (error) {}
};
