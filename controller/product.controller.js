const Product = require("../models/product");
module.exports.getProduct = async (req, res, next) => {
  try {
    // const product = await Product.where("name")
    //   .equals(/\w/)
    //   .where("quantity")
    //   .lt(10)
    //   .limit(2);
    const product = await Product.find({});
    res.status(200).send(product);
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
    next(error);
  }
};

module.exports.createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    //const product = new Product(req.body);
    //await product.save();
    product.logger();
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
    next(error);
  }
};
