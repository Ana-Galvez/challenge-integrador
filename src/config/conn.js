const mysql = require("mysql2");
// require('dotenv').config({path:'../../.env'});

const conn = mysql.createPool({
  host:"localhost",
  user:"root" ,
  database:"funko_test",
  password:"yanina",
  port:3306,
  waitForConnections:true,
  connectionLimit:10,
  queueLimit:0
});

module.exports= {
  connection: conn.promise()
}