const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Recipes, Tag } = require("../models");

// homepage
router.get('/', (req, res) => { res.render('homepage') });

// search page
router.get('/search', (req, res) => { res.render('search') });

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

module.exports = router;