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
    getProducts(function(result){
      return result
    })
  }
  connection.end()
});


function getProducts (cb) {
  connection.query("SELECT * FROM product;",function(error,result){
    if (error){ 
      throw error
    }else{
      cb((result.length>0)?result[result.forEach(res => {
         console.log(res.price, res.product_name)

      })]:"")
    }
  }
)
}
module.exports= connection