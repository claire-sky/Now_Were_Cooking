const express = require("express");
const session = require('express-session');
const routes = require("./controllers");
const path = require("path");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});

const PORT = process.env.PORT || 3001;
const app = express();

const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret recipe',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
