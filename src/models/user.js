const { connection } = require("../config/conn.js");
const crypts = require('bcryptjs')

const checkLogin = async (mail, contrasena) => {
  try {
    const [verificado] = await connection.query(
    //  `SELECT * FROM user WHERE email = '${mail}' AND password = '${contrasena}';`
    `SELECT * FROM user WHERE email = '${mail}';`
    );
    return verificado;
  } catch (error) {
    throw error;
  } finally {
    connection.releaseConnection();
  }
};

const crearUser = async (usuarioNuevo) => {
  console.log('el usuaio nuevo es' ,usuarioNuevo)
  const pass = usuarioNuevo.password
  console.log('la contrasena es' , pass)
  const hash = await crypts.hash(pass,12 )
  try {
    const usuarioConHash = { ...usuarioNuevo, password: hash}
    const [creado] = await connection.query(
        'INSERT INTO user SET ?;', usuarioConHash
     // `INSERT INTO user (name, lastname, email, password) VALUES ('${nombre}','${apellido}','${mail}','${contrasena}');`
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
