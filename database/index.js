const mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/adidas')
  .then(() => console.log('connected to db'))
  .catch((err) => console.error(err));

