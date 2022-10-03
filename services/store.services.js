const Store = require("../models/Store");

module.exports.GetStoreServiceById = async (id) => {
  return await Store.findById(id);
};
