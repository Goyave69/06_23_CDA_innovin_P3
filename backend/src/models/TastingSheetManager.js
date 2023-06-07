const AbstractManager = require("./AbstractManager");

const generateSqlSets = require("../services/generateSqlSets");

class TastingSheetManager extends AbstractManager {
  constructor() {
    super({ table: "tasting_sheet" });
  }

  insert(tastingSheet) {
    return this.database.query(
      `INSERT INTO ${this.table} (degustation_date, shape, eye, nose, mouth, conclusion, note, commentaire, wine_id, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        tastingSheet.degustation_date,
        tastingSheet.shape,
        tastingSheet.eye,
        tastingSheet.nose,
        tastingSheet.mouth,
        tastingSheet.conclusion,
        tastingSheet.note,
        tastingSheet.commentaire,
        tastingSheet.wine_id,
        tastingSheet.user_id,
      ]
    );
  }

  update(id, tastingSheet) {
    const sqlSets = generateSqlSets(tastingSheet);

    return this.database.query(
      `UPDATE ${this.table} SET ${sqlSets} WHERE id = ?`,
      [...Object.values(tastingSheet), id]
    );
  }
}

module.exports = TastingSheetManager;
