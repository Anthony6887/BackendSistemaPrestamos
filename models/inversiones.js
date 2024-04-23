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

  getInfo(id_Banco) {
    const sql = "SELECT * FROM inversiones WHERE id_Banco= ?";
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
    const sql = "SELECT * FROM inversiones WHERE id_Banco = ?";
    return new Promise((resolve, reject) => {
      this.connection.query(sql, [idBanco], (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });
  }

  register(
    id_Banco,
    interes_Mensual,
    interes_Anual,
    interes_Diario
  ) {
    const sql = `INSERT INTO inversiones (id_Banco, interes_Mensual, interes_Anual, interes_Diario)
      VALUES (?, ?, ?, ?)`;
    const values = [
      id_Banco,
      interes_Mensual,
      interes_Anual,
      interes_Diario
    ];

    return new Promise((resolve, reject) => {
      this.connection.query(sql, values, (err, result) => {
        if (err) {
          reject(err);
        } else {

          const idPrestamoRegistrado = result.insertId;

          resolve(idPrestamoRegistrado);
        }
      });
    });
  }

  update(
    id_Inversion,
    interes_Mensual,
    interes_Anual,
    interes_Diario
  ) {
    const sql =
      `UPDATE inversiones SET interes_Mensual = ?, interes_Anual = ?, interes_Diario = ?
      WHERE id_Inversion = ?`;

    ;
    const values = [
      interes_Mensual,
      interes_Anual,
      interes_Diario,
      id_Inversion
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
}

module.exports = Inversiones;
