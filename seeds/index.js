const seedUsers = require('./user-seeds');
const seedTags = require('./tag-seed');
const seedRecipes = require('./recipes-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  await seedTags();
  console.log('--------------');

  await seedRecipes();
  console.log('--------------');

  process.exit(0);
};

seedAll();