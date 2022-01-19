const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Recipes, Tag } = require("../models");

// login route
router.get('/login', (req, res) => {
    // if (req.session.loggedIn) {
    //   res.redirect('/search');
    //   return;
    // }
  
    res.render('login');
  });

// signup route
router.get('/signup', (req, res) => {
 
  res.render('signup');
});

module.exports = router;