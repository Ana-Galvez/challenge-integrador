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

const getCategories = async () => {
  try {
    const [rows] =await connection.query('SELECT * FROM category;')
    return rows
  } catch (error) {
    throw error
  }finally{
    connection.releaseConnection()
  }
}

const newProduct = async (data) => {
  try {
    const [rows] = await connection.query('INSERT INTO product SET ?;', data);
    return rows;
  } catch (error) {
    throw error
  }finally{
    connection.releaseConnection();
  }
}

const editProduct = async(itemEdit,id) => {
  try {
    const [rows] = await connection.query(`UPDATE product SET ${itemEdit} WHERE product_id = ${id};`)
    return rows;
  } catch (error) {
    throw error
  }finally{
    connection.releaseConnection();
  }



}

const deleteItem = async (id) =>{
try {
  const [rows] = await connection.query(`DELETE FROM product  WHERE product_id = ${id};`)
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
  getProductsLimit,
  getCategories,
  newProduct,
  editProduct,
  deleteItem
}