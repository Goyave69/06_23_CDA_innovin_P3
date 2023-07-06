const AbstractManager = require("./AbstractManager");

const generateSqlSets = require("../services/generateSqlSets");

class CartManager extends AbstractManager {
  constructor() {
    super({ table: "cart" });
  }

  findNotOrder(userId) {
    return this.database.query(
      `SELECT c.id, c.user_id, c.is_order, JSON_ARRAYAGG(
          JSON_OBJECT(
              'id', w.id,
              'name', w.name,
              'price', ROUND(w.price, 2)
          )
      ) AS content
      FROM cart c
      LEFT JOIN cart_wine cw ON c.id = cw.cart_id
      LEFT JOIN wine w ON cw.wine_id = w.id
      WHERE c.id = ?
      GROUP BY c.id`,
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
