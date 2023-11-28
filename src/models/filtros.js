const {connection} = require('../config/conn.js');

const filters = async () => {
  try{
    const {rows} = await connection.query('SELECT * FROM product WHERE product_name LIKE ?;',`%${searchTerm}%`);
    return rows;
  }catch(error){
    throw error;
  }finally{
    connection.releaseConnection()
  }
}

module.exports = {
  filters,
}