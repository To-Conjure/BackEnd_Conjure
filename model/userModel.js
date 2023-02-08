const { pool } = require("../db.js");

class User {
  static async getAllUsersFromDB() {
    const db = "SELECT * FROM users";
    const dbInfo = await pool.query(db);
    return dbInfo.rows;
  }

  static async getSingleUserFromDB(id) {
      const db = "SELECT * FROM users WHERE id = $1"
      const query = await pool.query(db, [id])
      return query.rows;
  }
}


module.exports = User;