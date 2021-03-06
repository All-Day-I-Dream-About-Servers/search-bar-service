const mongoose = require('mongoose');

const shoeSchema = mongoose.Schema({
  sku: {type: Number, index: true, unique: true},
  name: String,
  color: String,
  categories: [String],
  price: Number,
  sale: Number,
  image: String
});

var Shoe = mongoose.model('shoes', shoeSchema);

module.exports = Shoe;