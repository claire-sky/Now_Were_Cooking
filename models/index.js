// import all models
const Tag = require("./Tag");
const Recipes = require("./Recipes");
const User = require("./User");

// create associations
Recipes.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Recipes, {
  foreignKey: "user_id",
});

Recipes.belongsTo(Tag, {
  foreignKey: "tag_id",
});

Tag.hasMany(Recipes, {
  foreignKey: "tag_id",
});

module.exports = { User, Recipes, Tag };
