const { getDb } = require("../utils/DBConnect");
module.exports.getProduct = async (req, res, next) => {
  try {
    const db = getDb();
    const products = await db.collection("products").find({}).toArray();
    res.status(400).json(products);
  } catch (error) {
    next(error);
  }
};
