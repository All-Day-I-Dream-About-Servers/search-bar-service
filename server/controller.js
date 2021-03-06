const Shoe = require('../database/schema.js');
const db = require('../database');

var controller = {
  getAll: (req, res) => {
    Shoe.find()
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(400).send(err.errMsg);
      })
  },
  getOne: (req, res) => {
    Shoe.find({sku:req.params.sku})
      .then((data) => {
        res.status(201).send(data)
      })
      .catch((err) => {
        res.status(401).send(err.errMsg)
      })
  }
};

module.exports = controller;
