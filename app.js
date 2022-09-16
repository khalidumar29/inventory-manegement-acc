const express = require("express");
const app = express();
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");

// middleware
app.use(express.json());
app.use(cors());
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

module.exports = app;
