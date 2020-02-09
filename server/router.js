const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/')
  .get(controller.getAll)

// router
//   .route(`/:sku`)
//   .get(controller.getOne)

module.exports = router;
