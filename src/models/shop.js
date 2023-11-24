const connection = require('../config/conn.js')

const getProducts = () => {
  try {
    const {rows} = connection.query('SELECT * FROM product;')
    console.log(rows);
  } catch (error) {
    throw error
  }finally{
    connection.end()
  }
}

getProducts()
module.exports= {
  getProducts,
}