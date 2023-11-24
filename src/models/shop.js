const {connection} = require('../config/conn.js')

const getProducts = async () => {
  try {
    const [rows] = await connection.query('SELECT * FROM product;')
    return rows
  } catch (error) {
    throw error
  }finally{
    connection.releaseConnection()
  }
}

module.exports= {
  getProducts,
}