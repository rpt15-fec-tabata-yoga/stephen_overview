const faker = require('faker');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/overview', { useNewUrlParser: true });

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log('connected to mongoDB');
});

const OverviewSchema = new mongoose.Schema({
  description: String,
  releaseDate: String,
  developer: String,
  publisher: String,
  tags: Array
});

const Overview = mongoose.model('Overview', OverviewSchema);

const save = (gameInfo) => {
  let newDoc = new Overview(gameInfo);
  newDoc.save((err) => {
    if (err) {
      console.log('error while saving to db');
    }
  });
};

const retrieve = (sendToClient) => {
  Overview.find({})
    .limit(1)
    .exec((err, results) => {
      if (err) {
        console.log('error while retrieving data from db');
      }
      else {
      sendToClient(results);
      }
    });
}

module.exports.save = save;
module.exports.retrieve = retrieve;
