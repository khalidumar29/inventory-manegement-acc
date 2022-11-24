module.exports = (...role) => {
  return (req, res, next) => {
    const userRole = req.user.role;
    if (!role.includes(userRole)) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
    next();
  };
};
