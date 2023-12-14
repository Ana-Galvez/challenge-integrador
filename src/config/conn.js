const mysql = require("mysql2");
require('dotenv').config({path:'../../.env'});

const conn = mysql.createPool({



  host:process.env.HOST,
  user:process.env.USER,
  database:process.env.DB,
  password:process.env.PASS,
  port:process.env.PORT
  



  //DB: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = {
  connection: conn.promise(),
};
