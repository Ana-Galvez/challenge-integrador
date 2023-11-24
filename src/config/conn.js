const mysql = require("mysql2");
require('dotenv').config({path:'../../.env'});

const connection = mysql.createConnection({
  host:  process.env.HOST,
  user: process.env.USER,
  database:process.env.DATABASE,
  password: process.env.PASSWORD
});

connection.connect((error)=>{
  if(error){
    throw error
  }
  console.log('Conexión exitosa a la base de datos');
});

connection.end()
module.exports= connection