/** get store */

const { GetStoreServiceById } = require("../services/store.services");

module.exports.getStoreById = async (req, res, next) => {
  try {
    const store = await GetStoreServiceById(req.params);
    if (!store) {
      return res.status(404).json({ success: false, msg: "Store not found" });
    }
    res.status(200).json({ success: true, data: store });
  } catch (error) {
    next(error);
  }
};
