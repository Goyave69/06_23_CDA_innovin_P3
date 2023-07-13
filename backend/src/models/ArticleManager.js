const AbstractManager = require("./AbstractManager");

const generateSqlSets = require("../services/generateSqlSets");

class ArticleManager extends AbstractManager {
  constructor() {
    super({ table: "article" });
  }

  insert(article) {
    return this.database.query(
      `INSERT INTO ${this.table} (title, content, author, category) VALUES (?, ?, ?, ?)`,
      [article.title, article.content, article.author, article.category]
    );
  }

  update(id, article) {
    const sqlSets = generateSqlSets(article);

    return this.database.query(
      `UPDATE ${this.table} SET ${sqlSets} WHERE id = ?`,
      [...Object.values(article), id]
    );
  }
}

module.exports = ArticleManager;
