const express = require("express");
require("dotenv").config();
const movies = require("./moviesHandler");
const movieRouter = require("./src/routes/movies.routes");

const port = process.env.PORT;

const server = express();

server.use(express.json())

server.get("/", (req, res) => {
  res.send("Welcome to my Movies Gallery!");
});

server.use("/api/movies", movieRouter)

// //* get all movies
// server.get("/api/movies", movies.getAllMovies);

// //* get a single movie by ID
// server.get("/api/movies/:id", movies.getMovieById);

// //* create a new movie
// server.post("/api/movies", movies.createMovie);


server.listen(port, () => {
  console.log("server listening on port ", port);
});
