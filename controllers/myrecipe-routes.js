const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Recipes, Tag } = require("../models");

// get all recipes for myrecipe page
router.get('/', (req, res) => {
  Recipes.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: [
      'id',
      'title',
      'content',
      'tag_id'
    ],
    include: [
      {
        model: Tag,
        attributes: ["id", "tag_name"],
      }
    ]
  })
    .then(dbRecipeData => {
      const recipes = dbRecipeData.map(recipe => recipe.get({ plain: true }));

      res.render('my-recipes', {
        recipes,
        loggedIn: true
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;