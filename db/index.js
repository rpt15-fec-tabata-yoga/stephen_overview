const faker = require('faker');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/overview', { useNewUrlParser: true });

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log('connected to mongoDB');
});

const OverviewSchema = new mongoose.Schema({
  game_name: String,
  description: String,
  release_date: String,
  developer: String,
  publisher: String,
  tags: Array
});

const Overview = mongoose.model('Overview', OverviewSchema);

const save = (gameInfo) => {
  let newDoc = new Overview(gameInfo);
  newDoc.save((err) => {
    if (err) {
      console.log('error while saving to db', err);
    }
  });
};

const retrieve = (gameId, sendToClient) => {
  Overview.findById(gameId)
    .exec((err, results) => {
      if (err) {
        console.log('error while retrieving data from db');
      }
      else {
      // console.log('results in mongo retrieve', results);
      sendToClient(results);
      }
    });
}

module.exports.save = save;
module.exports.retrieve = retrieve;
