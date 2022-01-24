const router = require("express").Router();
const { Tag } = require("../../models");
const withAuth = require('../../utils/auth');

// GET /api/recipe
router.get("/", (req, res) => {
    // access our recipe model and run .findAll() method
    Tag.findAll()
      .then((dbTagData) => res.json(dbTagData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;
