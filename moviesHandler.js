const database = require("./db-config");

const getAllMovies = (req, res) => {
  let query = "SELECT * FROM movies";

  //* check if filter exists
  if (req.query.title != null) {
    query += ` WHERE title Like '%${req.query.title}%'`;
  }
  if (req.query.director != null) {
    if (req.query.title != null) {
      query += ` AND director Like '%${req.query.director}%'`;
    } else {
      query += ` WHERE director Like '%${req.query.director}%'`;
    }
  }
  
  console.log(query);
  database
    .query(query)
    .then(([movies]) => {
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

const getMovieById = (req, res) => {
  // console.log(req.params.id)
  const id = parseInt(req.params.id);
  // const {id} = req.params

  database
    .query(`Select * from movies Where id = ${id}`)
    // .query(`Select * from movies Where id === ${Number(id)}`)
    .then(([movie]) => {
      //   console.log(movie);
      if (movie[0] !== null && movie.length > 0) {
        res.status(200).json(movie[0]);
      } else {
        res.status(404).send(`Movie not found with id ${id}`);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving movies from database");
    });
};

const createMovie = (req, res) => {
  console.log(req.body);
  //   const { title, director, year, color, duration } = req.body;

  database
    .query(
      // "INSERT INTO movies (title, director, year, color, duration ) VALUES (?,?,?,?,?)",
      // [title, director, year, color, duration]
      "INSERT INTO movies SET ?",
      req.body
    )
    .then(([results]) => {
      // console.log(results);
      if (results.affectedRows > 0) {
        res
          .status(201)
          .send(
            `Your movie is created successfully with id ${results.insertId}`
          );
      } else {
        res.status(403).send("Your request is forbidden");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error creating the movie on database");
    });
};

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
};
