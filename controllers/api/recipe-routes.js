const router = require("express").Router();
const { Recipes } = require("../../models");
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var htmlParser = bodyParser.text()

router.use(bodyParser.json());
router.use(bodyParser.urlencoded());
router.use(bodyParser.text());

// GET /api/users
router.get("/", (req, res) => {
  // access our User model and run .findAll() method
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

// router.post("/", function (req, res) {
//   var username = req.body.username;
//     res.send('<h1>Hello</h1> '+username);
// });

router.post("/myaction", function(request, response) {
  console.log("Gender is:", request.body.gender);
  response.sendStatus(200)
});

router.post("/", (req, res) => {
  Recipes.create({
    title: req.body.title,
    content: req.body.content,
    user_id: req.body.user_id
  })
    .then((dbRecipeData) => res.json(dbRecipeData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.delete("/:id", (req, res) => {
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
