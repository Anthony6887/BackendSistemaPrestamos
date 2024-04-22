const DB = require("../db");
const db = new DB();

class Prestamos {
  constructor() {
    this.connection = db.connection;
  }
  getAll() {
    const sql = "SELECT * FROM prestamos";
    return new Promise((resolve, reject) => {
      this.connection.query(sql, (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });
  }

    
  getInfo(id_Banco) {
    const sql = "SELECT * FROM prestamos WHERE id_Banco= ?";
    const values = [id_Banco];

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

  getByBankId(idBanco) {
    const sql = "SELECT * FROM prestamos WHERE id_Banco = ?";
    return new Promise((resolve, reject) => {
      this.connection.query(sql, [idBanco], (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });
  }
}

module.exports = Prestamos;
