const bookSchema = require("../models/bookModels");
const store = async (req, res) => {
  console.log(req.body);
  var data = {
    title: req.body.title,
    author: req.body.author,
    summary: req.body.summary,
  };

  var bookData = new bookSchema(data);
  bookData
    .save()
    .then((response) => {
      res.json({ message: "Book store Successfully", success: true });
    })
    .catch((err) => {
      res.json({ message: "fail to store book", success: false });
    });
};
const update = (req, res) => {
  console.log(req.body);
  let bookId = req.body._id;
  bookSchema
    .findByIdAndUpdate({ _id: bookId }, req.body)
    .then((response) => {
      res.json({ message: "book updated successfully", success: true });
    })
    .catch((err) => {
      res.json({ message: "fail to update book", success: false });
    });
};
const delete_book = async (req, res) => {
  try {
    var user = await bookSchema.findById({ _id: req.body.bookid });

    if (user) {
      bookSchema
        .findByIdAndDelete({ _id: req.body.bookid })
        .then((response) => {
          res.json({ message: "book deleted successfully", success: true });
        })
        .catch((err) => {
          res.json({ message: "fail to delete book", success: false });
        });
    } else {
      console.log("tried to delete non existing book");
      res.json({ message: "Book not available", success: false });
    }
  } catch (err) {
    res.json({ message: "Something went wrong", success: false });
  }
};
const get = (req, res) => {
  bookSchema
    .find()
    .then((book) => {
      res.json(book);
    })
    .catch((err) => {
      res.json({ message: "fail to get books", success: false });
    });
};
module.exports = {
  store,
  update,
  delete_book,
  get,
};
