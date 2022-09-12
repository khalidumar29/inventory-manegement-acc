const mongoose = require("mongoose");
require("dotenv").config();
const { connectToServer } = require("./utils/DBConnect");
const app = require("./app");
const errorHandler = require("./middleware/errorHandler");
// routes
const productRoutes = require("./routes/product.route");

// server
const port = process.env.PORT || 8080;

// middleware
app.use(errorHandler);

// routes
app.use("/api/v1/products", productRoutes);

// database connection
connectToServer((err) => {
  if (!err) {
    app.listen(port, () => {
      console.log(port, "is running");
    });
  } else {
    console.log(err);
  }
});
