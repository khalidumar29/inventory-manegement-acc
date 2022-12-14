const express = require("express");
const app = express();
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
const productRoutes = require("./routes/product.route");
const brandRoutes = require("./routes/brand.route");
const storeRoutes = require("./routes/store.route");
const supplierRoute = require("./routes/supplier.route");
const stockRoute = require("./routes/stock.route");
const userRoute = require("./routes/user.route");

// middleware
app.use(express.json());
app.use(cors());
app.use(errorHandler);

// routes
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/brand", brandRoutes);
app.use("/api/v1/store", storeRoutes);
app.use("/api/v1/supplier", supplierRoute);
app.use("/api/v1/stock", stockRoute);
app.use("/api/v1/user", userRoute);

/** root route for testing purpose */
app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

module.exports = app;
