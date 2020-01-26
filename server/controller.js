const Shoe = require('../database/schema.js');
const db = require('../database');

var controller = {
  getAll: (req, res) => {
    console.log('hi')
    Shoe.find()
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(400).send(err.errMsg);
      })
  }
};

module.exports = controller;
