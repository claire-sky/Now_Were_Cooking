const seedUsers = require('./user-seeds');
const seedRecipes = require('./recipes-seeds');
const seedIngredients = require('./ingredients-seeds');
const seedFavorites = require('./favorites-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  await seedRecipes();
  console.log('--------------');

  await seedIngredients();
  console.log('--------------');

  await seedFavorites();
  console.log('--------------');

  process.exit(0);
};

seedAll();