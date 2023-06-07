const AbstractManager = require("./AbstractManager");

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
    let sqlSets = "";

    const wineKeys = Object.keys(wine);

    wineKeys.forEach((key, index) => {
      sqlSets += `${key} = ?`;
      sqlSets += index !== wineKeys.length - 1 ? ", " : "";
    });

    const sqlValues = Object.values(wine);
    sqlValues.push(id);

    return this.database.query(
      `UPDATE ${this.table} SET ${sqlSets} WHERE id = ?`,
      sqlValues
    );
  }
}

module.exports = WineManager;
