const mysql = require("mysql2");
require('dotenv').config({path:'../../.env'});

const conn = mysql.createPool({
  host:process.env.HOST,
  user:process.env.USER ,
  database:process.env.DATABASE,
  password:process.env.PASSWORD,
  port:process.env.PORT,
  waitForConnections:true,
  connectionLimit:10,
  queueLimit:0
});

module.exports= {
  connection: conn.promise()
}