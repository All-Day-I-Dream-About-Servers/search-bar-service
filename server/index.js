const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const favicon = require('serve-favicon');
const path = require('path');
const router = require('./router.js');

const port = 3005;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

app.use('/shoes', router);
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(favicon(path.join(__dirname, '../client/dist/favicon.png')));

app.all('*', (req, res, next) => {
  let origin = req.get('origin')
  res.header('Access-Control-Allow-Origin', origin)
  res.header('Access-Control-Allow-Headers', "X-Requested-Width")
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next()
})

app.listen(port, () => console.log(`Search module listening on port ${port}...`));
