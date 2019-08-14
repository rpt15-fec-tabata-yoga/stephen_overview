const db = require('./index.js');

// add fake data to database
const seedData = () => {
  // create random number of tags
  let random = Math.floor(Math.random() * 10);
  let randomTags = [];
  for (let x = 0; x < random; x++) {
    randomTags.push(faker.random.word());
  }

  for (let i = 0; i < 95; i++) {
    db.save({
      description: faker.lorem.paragraph(),
      releaseDate: faker.date.past(),
      developer: faker.company.companyName(),
      publisher: faker.company.companyName(),
      tags: randomTags
    })
  }
}

module.exports.seedData = seedData;