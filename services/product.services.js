const Product = require("../models/product");

module.exports.getProductService = async () => {
  // const product = await Product.where("name")
  //   .equals(/\w/)
  //   .where("quantity")
  //   .lt(10)
  //   .limit(2);
  return await Product.find({});
};

module.exports.createProductService = async (data) => {
  return await Product.create(data);
  //const product = new Product(req.body);
  //await product.save();
};
