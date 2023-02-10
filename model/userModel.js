const { pool } = require("../db.js");

class User {
  static async getSingleUserFromDB(id) {
    const db = "SELECT * FROM users WHERE user_id = $1"
    const query = await pool.query(db, [id])
    return query.rows;
}


static async getSingleUsersInfoFromDB(id) {
  const db = "SELECT * FROM users JOIN user_info ON users.user_id = user_info.user_id WHERE users.user_id = $1";
  const dbInfo = await pool.query(db, [id]);
  return dbInfo.rows;
}

  static async getAllUsersFromDB() {
    const db = "SELECT * FROM users";
    const dbInfo = await pool.query(db);
    return dbInfo.rows;
  }

  static async getAllUsersInfoFromDB() {
    const db = "SELECT * FROM users JOIN user_info ON users.user_id = user_info.user_id";
    const dbInfo = await pool.query(db);
    return dbInfo.rows;
  }

  static async registerUserToDB(...args) { 
    const data = [...args]
    const db = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING user_id, username, email;`
    const dbInfo = await pool.query(db, data);
    return dbInfo.rows[0];
  }
}


module.exports = User;