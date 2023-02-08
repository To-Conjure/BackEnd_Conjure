const { pool } = require("../db.js");

class UserData {
  static async getSingleUsersData() {
    const db = "SELECT * FROM users";
    const dbInfo = await pool.query(db);
    return dbInfo.rows;
  }

  static async getAllUsersData(id) {
      const db = "SELECT * FROM users WHERE id = $1";
      const query = await pool.query(db, [id]);
      return query.rows;
  }
}


module.exports = UserData;