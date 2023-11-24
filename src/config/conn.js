const mysql = require("mysql2");
require('dotenv').config();

const connection = mysql.createConnection({
  host:"localhost",
  user:"root" ,
  database:"funko_test",
  port:3306,
  password:"yanina"
});

connection.connect();
module.exports= connection