const mysql = require("mysql2");
require('dotenv').config({path:'../../.env'});

const connection = mysql.createConnection({
  host:process.env.HOST,
  user:process.env.USER ,
  database:process.env.DATABASE,
  password:process.env.PASSWORD
});


connection.connect((error)=>{
  if(error){
    throw error
  }else{
    console.log("Conexión a la base de datos exitosa");
  }
});
connection.end()
module.exports= connection