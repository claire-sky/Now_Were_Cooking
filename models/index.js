// import all models
const Recipes = require('./Recipes');
const User = require('./User');

// create associations
User.hasMany(Recipes, {
  foreignKey: 'user_id'
});

module.exports = { User, Recipes, };
