const {
  getProductService,
  createProductService,
} = require("../services/product.services");
module.exports.getProduct = async (req, res, next) => {
  try {
    const product = await getProductService();
    res.status(200).send(product);
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
    next(error);
  }
};

module.exports.createProduct = async (req, res, next) => {
  try {
    const product = await createProductService(req.body);
    product.logger();
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
    next(error);
  }
};
