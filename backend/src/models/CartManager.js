const AbstractManager = require("./AbstractManager");

const generateSqlSets = require("../services/generateSqlSets");

class CartManager extends AbstractManager {
  constructor() {
    super({ table: "cart" });
  }

  findNotOrder(userId) {
    return this.database.query(
      `SELECT c.id, w.name, c.quantity, w.price FROM ${this.table} AS c 
    JOIN wine AS w ON w.id = c.wine_id WHERE user_id = ?`,
      [userId]
    );
  }

  insert(cart) {
    return this.database.query(
      `INSERT INTO ${this.table} (is_order, user_id, wine_id, quantity) VALUES (?, ?, ?)`,
      [cart.is_order, cart.user_id, cart.wine_id, cart.quantity]
    );
  }

  update(id, cart) {
    const sqlSets = generateSqlSets(cart);

    return this.database.query(
      `UPDATE ${this.table} SET ${sqlSets} WHERE id = ?`,
      [...Object.values(cart), id]
    );
  }
}

module.exports = CartManager;
