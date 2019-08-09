const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('hello');
})

const port = 3000;
app.listen(port, () => {
  console.log(`App listening on ${port}`);
})