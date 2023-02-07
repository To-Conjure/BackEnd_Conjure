const { pool } = require("../db.js");

class User {
  static async getAllUsersFromDB() {
    const db = "SELECT * FROM users";
    const dbInfo = await pool.query(db);
    return dbInfo.rows;
  }
}


module.exports = User;