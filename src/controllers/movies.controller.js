const Movie = require("../models/movies.model")

const getAllMovies = (req, res) => {
    // database
    //   .query("SELECT * FROM movies")
    Movie.getAll()
      .then((movies) => {
        if (movies !== null && movies.length > 0) {
          res.status(200).json(movies);
        } else {
          res.status(404).send("Movies not found");
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error retrieving movies from database");
      });
  };

  module.exports ={
    getAllMovies
  }