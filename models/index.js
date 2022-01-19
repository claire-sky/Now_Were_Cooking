// import all models
const Tag = require("./Tag");
const Recipes = require("./Recipes");
const User = require("./User");

// create associations
User.hasMany(Recipes, {
  foreignKey: "user_id",
});

Tag.belongsTo(Recipes, {
  foreignKey: "tag_id",
});

Recipes.hasMany(Tag, {
  foreignKey: "tag_id",
});

module.exports = { User, Recipes, Tag };
