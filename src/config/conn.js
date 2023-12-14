const mysql = require("mysql2");
// require('dotenv').config({path:'../../.env'});

const conn = mysql.createPool({
  // host: "localhost",
  // user: "root",
  // database: "funko_test",
  // password: "root",
  /*
  host:process.env.HOST,
  user:process.env.USER ,
  databas 
  password:process.env.PASS,
  */

  host: "sql10.freesqldatabase.com",
  user: "sql10627826",
  database: "sql10627826",
  password: "YH6I5nV7ny",

  //port: 3307,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = {
  connection: conn.promise(),
};
