const express = require('express');
const bodyParser = require('body-parser');
// const https = require('https');
const db = require('../db/index.js');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/overview', (req, res) => {
  db.retrieve((data) => {
    res.send(data[0]);
  });
});

app.get('/api/image', (req, res) => {
  // make request to Bryan's server
  console.log('got to image get request in server');
});

app.get('/api/reviews', (req, res) => {
  // make request to Therese's server
  console.log('got to reviews get request in server');
});



const port = 3000;
app.listen(port, () => {
  console.log(`App listening on ${port}`);
});