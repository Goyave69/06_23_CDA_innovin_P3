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
              'wine_id', w.id,
              'cart_wine_id', cw.id,
              'name', w.name,
              'price', ROUND(w.price, 2),
              'image', w.image,
              'origin_country', w.origin_country,
              'quantity', cw.quantity
          )
      ) AS content FROM cart c
      LEFT JOIN cart_wine cw ON c.id = cw.cart_id
      LEFT JOIN wine w ON cw.wine_id = w.id
      WHERE c.user_id = ? && c.is_order = 0
      GROUP BY c.id`,
      [userId]
    );
  }

  insert(cart) {
    return this.database.query(
      `INSERT INTO ${this.table} (is_order, user_id) VALUES (?, ?)`,
      [cart.is_order, cart.user_id]
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
