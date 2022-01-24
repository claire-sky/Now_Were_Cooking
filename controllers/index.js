const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
const myRecipeRoutes = require("./myrecipe-routes");

router.use("/api", apiRoutes);
router.use("/", homeRoutes);
router.use("/my-recipes", myRecipeRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
