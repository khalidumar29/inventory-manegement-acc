const mongoose = require("mongoose");
require("dotenv").config();
const { connectToServer } = require("./utils/DBConnect");
const app = require("./app");
const productRoutes = require("./routes/product.route");
const port = process.env.PORT || 8080;

// routes
app.use("/api/v1/product", productRoutes);

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
mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
  console.log("connected to database");
});
