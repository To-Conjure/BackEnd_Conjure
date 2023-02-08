const { pool } = require("../db.js");

class UserData {
  static async getSingleUserDataFromDB(id) {
    const db = "SELECT * FROM user_info WHERE user_info_id = $1";
    const query = await pool.query(db, [id]);
    return query.rows;
  }

  static async getAllUsersDataFromDB() {
      const db = "SELECT * FROM user_info";
      const dbInfo = await pool.query(db);
      return dbInfo.rows;
  }
}


module.exports = UserData;