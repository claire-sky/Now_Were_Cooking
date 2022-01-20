const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Recipes, Tag } = require("../models");

// homepage
router.get('/', (req, res) => { res.render('homepage') });

// login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/search');
      return;
    }
  
    res.render('login');
  });

// signup route
router.get('/signup', (req, res) => { res.render('signup') });

// get all recipes for search page
router.get('/search', (req, res) => {
  Recipes.findAll({
    attributes: [
      'id',
      'title',
      'content',
    ]
  })
    .then(dbRecipeData => {
      const recipes = dbRecipeData.map(recipe => recipe.get({ plain: true }));

      res.render('search', {
        recipes,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;