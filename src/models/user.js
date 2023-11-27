const { connection } = require("../config/conn.js");

const checkLogin = async (mail, contrasena) => {
  try {
    const [verificado] = await connection.query(
      `SELECT * FROM user WHERE email = '${mail}' AND password = '${contrasena}';`
    );
    return verificado;
  } catch (error) {
    throw error;
  } finally {
    connection.releaseConnection();
  }
};

const crearUser = async (nombre, apellido, mail, contrasena) => {
  try {
    const [creado] = await connection.query(
      `INSERT INTO user (name, lastname, email, password) VALUES ('${nombre}','${apellido}','${mail}','${contrasena}');`
    );
    return creado;
  } catch (error) {
    throw error;
  } finally {
    connection.releaseConnection();
  }
}


module.exports = {
  checkLogin,
  crearUser
}
