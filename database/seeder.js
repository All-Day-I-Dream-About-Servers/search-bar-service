const mongoose = require('mongoose');
const db = require('./index.js');
const Shoe = require('./schema.js');
const data = require('./data.json');

const seeder = (seedData) => {
  console.log('hi')
  Shoe.create(seedData)
    .then(() => {
      console.log('seeded');
    })
    .catch((err) => {
      console.error(err);
    });
};

seeder(data);
// mongoose.connection.close();