const mysql = require("mysql2/promise");
require("dotenv").config();

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection
  .getConnection()
  .then(() => {
    console.log("can reach database: " + process.env.DB_NAME);
  })
  .catch((err) => console.error(err));

module.exports = connection;
