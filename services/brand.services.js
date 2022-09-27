const Brand = require("../models/Brand");

module.exports.createBrandService = async (data) => {
  return await Brand.create(data);
};

module.exports.getBrandService = async () => {
  return await Brand.find({}).select("-name -email -supplier");
};

module.exports.getBrandByIdService = async (id) => {
  return await Brand.findById(id);
};

module.exports.updateBrandService = async (id, data) => {
  return await Brand.updateOne({ _id: id }, data, { runValidators: true });
};
