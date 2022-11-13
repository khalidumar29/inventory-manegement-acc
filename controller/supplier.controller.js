const {
  createSupplierService,
  getAllSuppliersService,
} = require("../services/supplier.services");

module.exports.createSupplier = async (req, res, next) => {
  try {
    const supplier = await createSupplierService(req.body);
    res.status(200).json({ success: true, data: supplier });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
    next(error);
  }
};

module.exports.getAllSuppliers = async (req, res, next) => {
  try {
    const supplier = await getAllSuppliersService();
    res.status(200).json({ success: true, data: supplier });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
    next(error);
  }
};
