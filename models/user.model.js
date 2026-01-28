const pool = require("../config/database");

const User = {
  async findByEmail(email) {
    const [rows] = await pool.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );
    return rows[0];
  },

  async create(email, password) {
    const [result] = await pool.query(
      "INSERT INTO users (email, password) VALUES (?, ?)",
      [email, password]
    );
    return result.insertId;
  },
};

module.exports = User;
