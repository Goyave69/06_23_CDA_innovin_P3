const AbstractManager = require("./AbstractManager");

const generateSqlSets = require("../services/generateSqlSets");

class CartWineManager extends AbstractManager {
  constructor() {
    super({ table: "cart_wine" });
  }

  insert(cartWine) {
    return this.database.query(
      `INSERT INTO ${this.table} (quantity, wine_id, cart_id) VALUES (?, ?, ?)`,
      [cartWine.quantity, cartWine.wine_id, cartWine.cart_id]
    );
  }

  update(id, cartWine) {
    const sqlSets = generateSqlSets(cartWine);

    return this.database.query(
      `UPDATE ${this.table} SET ${sqlSets} WHERE id = ?`,
      [...Object.values(cartWine), id]
    );
  }
}

module.exports = CartWineManager;
