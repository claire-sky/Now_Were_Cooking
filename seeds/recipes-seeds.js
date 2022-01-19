const { Recipes } = require("../models");

const recipeData = [
  {
    title: "Chicken Bake Parmesan",
    content: "https://www.pinterest.com/pin/584482857895424864/",
    tag_id: 1,
    user_id: 1,
  },
  {
    title: "Slow Cooker Ranch Chicken",
    content: "https://www.pinterest.com/pin/195273333836440552/",
    tag_id: 1,
    user_id: 2,
  },
  {
    title: "Chicken Fetucine Alfredo",
    content: "https://www.pinterest.com/pin/107804984822277778/",
    tag_id: 1,
    user_id: 3,
  },
  {
    title: "Vegetarian Taquitos",
    content: "https://www.pinterest.com/pin/109634572169784992/",
    tag_id: 2,
    user_id: 4,
  },
  {
    title: "Vegetarian Stuffed Bell Peppers",
    content: "https://www.pinterest.com/pin/422281204747057/",
    tag_id: 2,
    user_id: 5,
  },
  {
    title: "Vegetarian Crunchwrap Supreme",
    content: "https://www.pinterest.com/pin/5348093298153548/",
    tag_id: 2,
    user_id: 6,
  },
  {
    title: "Papa Burger",
    content: "https://www.tasteofhome.com/recipes/papa-burger/",
    tag_id: 3,
    user_id: 2,
  },
  {
    title: "Speedy Shepherd’s Pie",
    content: "https://www.tasteofhome.com/recipes/papa-burger/",
    tag_id: 3,
    user_id: 1,
  },
  {
    title: "Mongolian Beef",
    content: "https://www.spoonforkbacon.com/mongolian-beef-over-steamed-rice/",
    tag_id: 3,
    user_id: 2,
  },
];

const seedRecipes = () => Recipes.bulkCreate(recipeData);

module.exports = seedRecipes;
