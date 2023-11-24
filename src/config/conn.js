const mysql = require("mysql2");
require('dotenv').config();

const connection = mysql.createConnection({
  host:  process.env.HOST,
  user: process.env.USER,
  database:process.env.DATABASE,
  port:process.env.DATABASE || 3306,
});

connection.connect();
module.exports= connection