const seedUsers = require('./user-seeds');
const seedRecipes = require('./recipes-seeds');
const seedTags = require('./tag-seed');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  await seedRecipes();
  console.log('--------------');

  await seedTags();
  console.log('--------------');

  process.exit(0);
};

seedAll();