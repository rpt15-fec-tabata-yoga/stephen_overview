const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const db = require('../db/index.js');
const port = 3000;

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

app.get('/api/reviews/:gameName', (req, res) => {
  // make request to Therese's server
  console.log('got to reviews get request in server');
  axios.get('http://localhost:3001/api/reviews/:gameName')
    .then((response) => {
      console.log('res from get request to Therese', response);
      // may need to change response to something else if the data
      res.send(response);
    })
    .catch((error) => {
      console.log('error in get request to Therese database', error);
    });
});


app.listen(port, () => {
  console.log(`App listening on ${port}`);
});