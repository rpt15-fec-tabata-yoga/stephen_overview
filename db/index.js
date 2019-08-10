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

const save = (doc) => {
  let newDoc = new Overview(doc);
  newDoc.save((err) => {
    if (err) {
      console.log('error while saving to db');
    }
  })
};

// add fake data to database
// const fakeData = () => {
//   // create random number of tags
//   let random = Math.floor(Math.random() * 10);
//   let randomTags = [];
//   for (let x = 0; x < random; x++) {
//     randomTags.push(faker.random.word());
//   }

//   for (let i = 0; i < 95; i++) {
//     save({
//       description: faker.lorem.paragraph(),
//       releaseDate: faker.date.past(),
//       developer: faker.company.companyName(),
//       publisher: faker.company.companyName(),
//       tags: randomTags
//     })
//   }
// }
// fakeData();

const retrieve = () => {
  console.log('retrieve function for mongoose');
}

module.exports.save = save;
module.exports.retrieve = retrieve;
