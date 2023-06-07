const AbstractManager = require("./AbstractManager");

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
    let sqlSets = "";

    const userKeys = Object.keys(user);

    userKeys.forEach((key, index) => {
      sqlSets += `${key} = ?`;
      sqlSets += index !== userKeys.length - 1 ? ", " : "";
    });

    const sqlValues = Object.values(user);
    sqlValues.push(id);

    return this.database.query(
      `UPDATE ${this.table} SET ${sqlSets} WHERE id = ?`,
      sqlValues
    );
  }
}

module.exports = WineManager;
