const router = require("express").Router();
const { Recipes } = require("../../models");
const withAuth = require('../../utils/auth');

// GET /api/recipe
router.get("/", (req, res) => {
  // access our recipe model and run .findAll() method
  Recipes.findAll()
    .then((dbRecipeData) => res.json(dbRecipeData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/users/1
router.get("/:id", (req, res) => {
  Recipes.findOne({
    where: {
      id: req.params.id,
    },
    // include: [],
  })
    .then((dbRecipeData) => {
      if (!dbRecipeData) {
        res.status(404).json({ message: "No recipe found with this id" });
        return;
      }
      res.json(dbRecipeData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", withAuth, (req, res) => {
  Recipes.create({
    title: req.body.title,
    content: req.body.content,
    user_id: req.session.user_id
  })
    .then((dbRecipeData) => res.json(dbRecipeData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", withAuth, (req, res) => {
  Recipes.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbRecipeData) => {
      if (!dbRecipeData) {
        res.status(404).json({ message: "No recipe found with this id" });
        return;
      }
      res.json(dbRecipeData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
