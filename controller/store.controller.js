/** get store */

const {
  GetStoreByIdService,
  GetStoreService,
  createStoreService,
  deleteStoreByIdService,
} = require("../services/store.services");

module.exports.getStoreById = async (req, res, next) => {
  try {
    const store = await GetStoreByIdService(req.params);
    if (!store) {
      return res.status(404).json({ success: false, msg: "Store not found" });
    }
    res.status(200).json({ success: true, data: store });
  } catch (error) {
    next(error);
  }
};

module.exports.getStore = async (req, res, next) => {
  try {
    const store = await GetStoreService();
    if (!store) {
      return res.status(404).json({ success: false, msg: "Store not found" });
    }
    res.status(200).json({ success: true, data: store });
  } catch (error) {
    next(error);
  }
};

module.exports.createStore = async (req, res, next) => {
  try {
    const store = await createStoreService(req.body);
    res.status(201).json({ success: true, data: store });
  } catch (error) {
    next(error);
  }
};

module.exports.updateStoreById = async (req, res, next) => {
  try {
    const store = await updateStoreByIdService(req.params);
  } catch (error) {
    next(error);
  }
};

module.exports.deleteStoreById = async (req, res, next) => {
  try {
    const store = await deleteStoreByIdService(req.params);
    if (!store) {
      return res.status(404).json({ success: false, msg: "Store not found" });
    }
    res.status(200).json({ success: true, data: store });
  } catch (error) {
    next(error);
  }
};
