const AbstractManager = require("./AbstractManager");

const generateSqlSets = require("../services/generateSqlSets");

class WineManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `INSERT INTO ${this.table} (firstname, lastname, username, role, email, password, address, phone) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        user.username,
        user.role,
        user.email,
        user.hashedPassword,
        user.address,
        user.phone,
      ]
    );
  }

  update(id, user) {
    const sqlSets = generateSqlSets(user);

    return this.database.query(
      `UPDATE ${this.table} SET ${sqlSets} WHERE id = ?`,
      [...Object.values(user), id]
    );
  }

  findByEmailWithPassword(email) {
    return this.database.query(
      `SELECT id, email, password FROM ${this.table} WHERE email = ?`,
      [email]
    );
  }
}

module.exports = WineManager;
