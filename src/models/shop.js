const connection = require('../config/conn.js')
let rows
const getProducts = () => {
  try {
    rows = connection.query('SELECT * FROM product;')
  } catch (error) {
    throw error
  }finally{
    connection.end()
  }
}

getProducts()
console.log(rows);
module.exports= {
  getProducts,
}