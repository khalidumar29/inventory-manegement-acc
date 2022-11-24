const express = require("express");
const router = express.Router();
const stockController = require("../controller/stock.controller");
const verifyToken = require("../middleware/verifyToken");

// router.route("/bulk-update").patch(stockController.bulkUpdateProduct);
// router.route("/bulk-delete").delete(stockController.bulkDeleteProduct);

router
  .route("/")
  .get(verifyToken, stockController.getStocks)
  .post(verifyToken, stockController.createStock);

router.route("/:id").get(verifyToken, stockController.getStockById);
// .patch(stockController.updateStockById)
// .delete(stockController.deleteStockById)

module.exports = router;
