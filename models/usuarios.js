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

  login(correo, contrasenia) {
    const sql = "SELECT id_Cliente, usuario, nombre, apellido, correo, telefono, rol FROM usuarios WHERE correo = ? AND contrasenia = ?";
    const values = [correo, contrasenia];

    return new Promise((resolve, reject) => {
      this.connection.query(sql, values, (err, result) => {
        if (err) {
          reject(err);
        } else {
          if (result.length > 0) {
            resolve(result[0]);
          } else {
            resolve(null);
          }
        }
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

          const idClienteInsertado = result.insertId;

          resolve(idClienteInsertado);
        }
      });
    });
  }

  update(
    usuario,
    contrasenia,
    nombre,
    apellido,
    correo,
    telefono,
    rol,
    id_Cliente
  ) {
    const sql =
      `UPDATE usuarios SET usuario = ?, contrasenia = ?, nombre = ?, apellido = ?, correo = ?, telefono = ?, rol = ?
      WHERE id_Cliente = ?`;
    ;
    const values = [
      usuario,
      contrasenia,
      nombre,
      apellido,
      correo,
      telefono,
      rol,
      id_Cliente
    ];

    return new Promise((resolve, reject) => {
      this.connection.query(sql, values, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result.affectedRows > 0);
        }
      });
    });
  }
  delete(id_Cliente) {
    const sql = "DELETE FROM usuarios WHERE id_Cliente = ?";
    const values = [id_Cliente];

    return new Promise((resolve, reject) => {
      this.connection.query(sql, values, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result.affectedRows > 0);
        }
      });
    });
  }
}
module.exports = Usuarios;
