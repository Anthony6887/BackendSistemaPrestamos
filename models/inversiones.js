const DB = require("../db");
const db = new DB();

class Inversiones {
  constructor() {
    this.connection = db.connection;
  }
  getAll() {
    const sql = "SELECT * FROM inversiones";
    return new Promise((resolve, reject) => {
      this.connection.query(sql, (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });
  }

  getByBankId(idBanco) {
    const sql = "SELECT * FROM inversiones WHERE id_Banco = ?";
    return new Promise((resolve, reject) => {
      this.connection.query(sql, [idBanco], (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });
  }
}

module.exports = Inversiones;
