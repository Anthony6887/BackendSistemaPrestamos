const DB = require("../db");
const db = new DB();

class Usuarios {
  constructor() {
    this.connection = db.connection;
  }
  getAll() {
    const sql = "SELECT * FROM usuarios";
    return new Promise((resolve, reject) => {
      this.connection.query(sql, (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });
  }

  register(
    usuario,
    contrasenia,
    nombre,
    apellido,
    correo,
    telefono,
    rol
  ) {
    const sql = `INSERT INTO usuarios (usuario, contrasenia, nombre, apellido, correo, telefono, rol)
      VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const values = [
      usuario,
      contrasenia,
      nombre,
      apellido,
      correo,
      telefono,
      rol
    ];

    return new Promise((resolve, reject) => {
      this.connection.query(sql, values, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result.insertId);
        }
      });
    });
  }
}
module.exports = Usuarios;
