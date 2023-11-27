const mysql = require("mysql2");
// require('dotenv').config({path:'../../.env'});

const conn = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "funko_test",
  password: "root",

  /*

  host:process.env.HOST,
  user:process.env.USER ,
  database:process.env.DB,
  password:process.env.PASS,

  */

  port: 3307,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = {
  connection: conn.promise(),
};
