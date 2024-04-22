const DB = require("../db");
const db = new DB();

class Bancos {
  constructor() {
    this.connection = db.connection;
  }
  getAll() {
    const sql = "SELECT * FROM bancos";
    return new Promise((resolve, reject) => {
      this.connection.query(sql, (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });
  }

  
  getInfo(id_Administrador) {
    const sql = "SELECT * FROM bancos WHERE id_Administrador= ?";
    const values = [id_Administrador];

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
    nombre,
    logo,
    direccion,
    id_Administrador
  ) {
    const sql = `INSERT INTO bancos (nombre, logo, direccion, id_Administrador)
      VALUES (?, ?, ?, ?)`;
    const values = [
      nombre,
      logo,
      direccion,
      id_Administrador
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
module.exports = Bancos;
