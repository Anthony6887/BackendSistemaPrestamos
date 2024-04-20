const mysql = require("mysql");

class DB {
  constructor() {
    this.connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "sistemaprestamos",
    });
  }
  connect() {
    this.connection.connect((err) => {
      if (err) {
        console.log("Error connecting to Db", err);
        return;
      }
      console.log("Connection established");
    });
  }
}
module.exports = DB;
