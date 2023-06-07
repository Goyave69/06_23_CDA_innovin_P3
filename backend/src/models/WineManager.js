const AbstractManager = require("./AbstractManager");

const generateSqlSets = require("../services/generateSqlSets");

class WineManager extends AbstractManager {
  constructor() {
    super({ table: "wine" });
  }

  insert(wine) {
    return this.database.query(
      `INSERT INTO ${this.table} (name, year, wine_type, origin_country, region, grape_variety, description, best_seller, image, price) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        wine.name,
        wine.year,
        wine.wine_type,
        wine.origin_country,
        wine.region,
        wine.grape_variety,
        wine.description,
        wine.best_seller,
        wine.image,
        wine.price,
      ]
    );
  }

  update(id, wine) {
    const sqlSets = generateSqlSets(wine);

    return this.database.query(
      `UPDATE ${this.table} SET ${sqlSets} WHERE id = ?`,
      [...Object.values(wine), id]
    );
  }
}

module.exports = WineManager;
