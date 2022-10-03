const Store = require("../models/Store");

module.exports.GetStoreByIdService = async (id) => {
  return await Store.findById(id);
};

module.exports.GetStoreService = async () => {
  return await Store.find({});
};

module.exports.createStoreService = async (data) => {
  return await Store.create(data);
};

module.exports.deleteStoreByIdService = async (id) => {
  return await Store.deleteOne({ _id: id });
};
