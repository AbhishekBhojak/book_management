require("dotenv").config();
const express = require("express");
const mongoose = require("./database/db");
const bookRoutes = require("./routers/bookRoutes");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("welcome to book management");
});
app.use("/books", bookRoutes);
app.listen(port, () => {
  console.log(`app listening on ${port}`);
});
