const mongoose = require("mongoose");

// const connection = mongoose.createConnection(
//   "mongodb://127.0.0.1:27017/book_management"
//   );

// autoIncrement.initix alize(connection);
const Schema = mongoose.Schema;
const bookSchema = new Schema(
  {
    title: {
      type: String,
    },
    author: {
      type: String,
    },
    summary: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const book = mongoose.model("Book_detail", bookSchema);
module.exports = book;
