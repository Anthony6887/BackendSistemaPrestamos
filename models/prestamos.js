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

  register(
    tipo,
    tasa_interes,
    monto_min,
    monto_max,
    detalles,
    id_Banco
  ) {
    const sql = `INSERT INTO prestamos (tipo, tasa_interes, monto_min, monto_max, detalles, id_Banco)
      VALUES (?, ?, ?, ?, ?, ?)`;
    const values = [
      tipo,
      tasa_interes,
      monto_min,
      monto_max,
      detalles,
      id_Banco
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
    id_Prestamo,
    tipo,
    tasa_interes,
    monto_min,
    monto_max,
    detalles,
  ) {
    const sql =
      `UPDATE prestamos SET tipo = ?, tasa_interes = ?, monto_min = ?, monto_max = ?, detalles = ? 
      WHERE id_Prestamo = ?`;

    ;
    const values = [
      tipo,
      tasa_interes,
      monto_min,
      monto_max,
      detalles,
      id_Prestamo
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

module.exports = Prestamos;
