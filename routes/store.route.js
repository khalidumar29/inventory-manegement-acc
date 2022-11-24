const express = require("express");
const router = express.Router();
const storeController = require("../controller/store.controller");
const verifyToken = require("../middleware/verifyToken");

router
  .route("/")
  .get(storeController.getStore)
  .post(storeController.createStore);

router
  .route("/:id")
  .get(verifyToken, storeController.getStoreById)
  .delete(verifyToken, storeController.deleteStoreById)
  .patch(verifyToken, storeController.updateStoreById);
module.exports = router;
