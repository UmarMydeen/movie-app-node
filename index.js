const express = require("express");
const Movie = require('./api/models/moviesModel'); //created model loading here
const routes = require("./api/routes/moviesRoutes");

const app = express();
routes(app);

module.exports = app;