const {connection} = require('../config/conn.js')

const getProducts = async () => {
  try {
    const [rows] = await connection.query('SELECT * FROM product JOIN licence ON product.licence_id = licence.licence_id JOIN category ON product.category_id = category.category_id ORDER BY product_id;')
    return rows
  } catch (error) {
    throw error
  }finally{
    connection.releaseConnection()
  }
}

const getProductsLimit = async () => {
  try {
    const [rows] = await connection.query('SELECT * FROM product JOIN licence ON product.licence_id = licence.licence_id JOIN category ON product.category_id = category.category_id ORDER BY product_id LIMIT 5;')
    return rows
  } catch (error) {
    throw error
  }finally{
    connection.releaseConnection()
  }
}

const getLicence = async () => {
  try {
    const [rows] = await connection.query('SELECT * FROM licence')
    return rows
  } catch (error) {
    throw error
  }finally{
    connection.releaseConnection()
  }
}



module.exports= {
  getProducts,
  getLicence,
  getProductsLimit
}