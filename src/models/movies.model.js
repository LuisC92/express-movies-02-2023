const database = require("../../db-config")

const getAll = () =>{
    return database.query("SELECT * FROM movies")
        .then(([results]) => results)
}

module.exports = {
    getAll
}