const DB = require("../db");
const db = new DB();

class CobrosIndirectos {
  constructor() {
    this.connection = db.connection;
  }
  getAll() {
    const sql = "SELECT * FROM cobrosindirectos";
    return new Promise((resolve, reject) => {
      this.connection.query(sql, (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });
  }

  getByBankId(idBanco) {
    const sql = "SELECT * FROM cobrosindirectos WHERE id_Banco = ?";
    return new Promise((resolve, reject) => {
      this.connection.query(sql, [idBanco], (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });
  }

  register(
  nombreCobroIndirecto,
  montoSeguro,
  ) {
    const sql = `INSERT INTO cobrosindirectos (nombreCobroIndirecto, montoSeguro)
      VALUES (?, ?)`;
    const values = [
      nombreCobroIndirecto,
      montoSeguro
    ];

    return new Promise((resolve, reject) => {
      this.connection.query(sql, values, (err, result) => {
        if (err) {
          reject(err);
        } else {

          const idCobroIndirectos = result.insertId;

          resolve(idCobroIndirectos);
        }
      });
    });
  }
}

module.exports = CobrosIndirectos;
