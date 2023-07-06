const AbstractManager = require("./AbstractManager");

const generateSqlSets = require("../services/generateSqlSets");

class OrderManager extends AbstractManager {
  constructor() {
    super({ table: "`order`" });
  }

  findAll(userId) {
    return this.database.query(
      `SELECT o.id, o.order_date, o.total_amount, o.shipping_address, o.status, SUM(c.) FROM ${this.table} AS o
    JOIN cart AS c ON c.order_id = o.id WHERE c.user_id = ?`,
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
