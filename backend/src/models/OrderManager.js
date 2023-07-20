const AbstractManager = require("./AbstractManager");

const generateSqlSets = require("../services/generateSqlSets");

class OrderManager extends AbstractManager {
  constructor() {
    super({ table: "`order`" });
  }

  // findAllOrder(userId) {
  //   return this.database.query(
  //     `SELECT o.id, o.order_date, o.total_amount, o.shipping_address, o.status FROM ${this.table} AS o
  //   JOIN cart AS c ON c.id = o.cart_id AND c.is_order = 1 WHERE c.user_id = ?`,
  //     [userId]
  //   );
  // }
  findAllOrder(userId) {
    return this.database.query(
      `SELECT c.id, c.user_id, c.is_order, JSON_ARRAYAGG(
          JSON_OBJECT(
              'order_date', NOW(),
              'name', w.name,
              'price', ROUND(w.price, 2),
              'quantity', cw.quantity,
              'wineImage', w.image,
              'wineId', w.id
          )
      ) AS content FROM cart c
      LEFT JOIN cart_wine cw ON c.id = cw.cart_id
      LEFT JOIN wine w ON cw.wine_id = w.id
      WHERE c.user_id = ? && c.is_order = 1
      GROUP BY c.id`,
      [userId]
    );
  }

  update(id, order) {
    const sqlSets = generateSqlSets(order);

    return this.database.query(
      `UPDATE ${this.table} SET ${sqlSets} WHERE id = ?`,
      [...Object.values(order), id]
    );
  }
}

module.exports = OrderManager;
