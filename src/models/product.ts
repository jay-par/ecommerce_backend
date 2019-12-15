const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
  name: String,
  descriptrion: String,
  categories: Array
});

const Product = mongoose.model("Product", productSchema);
module.exports = { Product };
