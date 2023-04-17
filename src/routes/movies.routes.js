const express = require('express');
// const movies = require("../../moviesHandler");
const movieController = require("../controllers/movies.controller")
const movieRouter = express.Router()


//* get all movies "/api/movies/"
movieRouter.get("/", movieController.getAllMovies);

// //* get a single movie by ID: "/api/movies/:id"
// movieRouter.get("/:id", movies.getMovieById);

// //* create a new movie "/api/movies/"
// movieRouter.post("/", movies.createMovie);

module.exports = movieRouter;