const mongoose = require("mongoose");
require("dotenv").config();
const url = process.env.URL;
var connection = mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to MongoDB successfully.");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
  });
module.exports = mongoose;
