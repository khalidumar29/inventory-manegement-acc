const Supplier = require("../models/Supplier");

module.exports.createSupplierService = async (data) => {
  return await Supplier.create(data);
};

module.exports.getAllSuppliersService = async () => {
  return await Supplier.find({});
};
