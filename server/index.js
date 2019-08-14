const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/index.js');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/game-overview', (req, res) => {
  db.retrieve((data) => {
    res.send(data[0]);
  });
});



const port = 3000;
app.listen(port, () => {
  console.log(`App listening on ${port}`);
});