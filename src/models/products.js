const {connection} = require('../config/conn.js')

const getProducts = async () => {
  try {
    const [rows] = await connection.query('SELECT * FROM product JOIN licence ON product.licence_id = licence.licence_id;')
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