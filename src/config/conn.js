const mysql = require("mysql2");
require('dotenv').config();

const conn = mysql.createPool({
  // host: "localhost",
  // user: "root",
  // database: "funko_test",
  // password: "root",

  host:process.env.DBHOST,
  user:process.env.DBUSER ,
  port:process.env.DBPORT,
  password:process.env.DBPASS,
  database:process.env.DB,


  host: "sql10.freesqldatabase.com",
  user: "sql10627826",
  database: "sql10627826",
  password: "YH6I5nV7ny",
  port: 3306,


  /* host:process.env.HOST,
  user:process.env.USER,
  database:process.env.DB,
  password:process.env.PASS,
  port:process.env.PORT
  */



  //DB: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = {
  connection: conn.promise(),
};
