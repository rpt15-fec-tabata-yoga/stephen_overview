const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const db = require('../db/index.js');

const app = express();

app.use('/:gameId', express.static('public'));
app.use('/', express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/overview/:gameId', (req, res) => {
  console.log('req.params.gameId', req.params.gameId);
  db.retrieve(req.params.gameId, (gameInfo) => {
    console.log('game information from mongo', gameInfo);
    res.send(gameInfo);
  });
});

app.get('/api/image/:gameId', (req, res) => {
  // make request to Bryan's server
  console.log('got to image get request in server');
});

app.get('/api/reviews/:gameId', (req, res) => {
  // make request to Therese's server
  console.log('got to reviews get request in server');

  /*
  information to send:
    overall reviews for both:
      - recent reviews (past 30 days)
      - all reviews

    recent reviews
      - total number of reviews
      - % of reviews that were positive/negative

    all reviews
      - total number of reviews
      - % of reviews that were positive/negative
  */
});



const port = 3000;
app.listen(port, () => {
  console.log(`App listening on ${port}`);
});