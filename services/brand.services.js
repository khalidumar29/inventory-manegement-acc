const Brand = require("../models/Brand");

module.exports.createBrandService = async (data) => {
  return await Brand.create(data);
};

module.exports.getBrandService = async () => {
  return await Brand.find({}).select("-products -supplier");
};

module.exports.getBrandByIdService = async (id) => {
  return await Brand.findById(id).select("-products -supplier");
};
