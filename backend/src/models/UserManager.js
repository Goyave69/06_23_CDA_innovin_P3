const AbstractManager = require("./AbstractManager");

const generateSqlSets = require("../services/generateSqlSets");

class WineManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `INSERT INTO ${this.table} (firstname, lastname, username, role, email, password, address, phone, avatar, cart_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        user.username,
        user.role,
        user.email,
        user.password,
        user.address,
        user.phone,
        user.avatar,
        user.cart_id,
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
}

module.exports = WineManager;
