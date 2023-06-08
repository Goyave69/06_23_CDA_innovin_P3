const generateSqlSets = (data) =>
  Object.keys(data)
    .map((key) => `${key} = ?`)
    .join(", ");

module.exports = generateSqlSets;
