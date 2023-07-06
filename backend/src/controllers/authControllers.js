const models = require("../models");

const getUserByEmailWithPasswordAndPassToNext = (req, res, next) => {
  const { email } = req.body;
  models.user
    .findByEmailWithPassword(email)
    .then(([users]) => {
      if (users[0]) {
        [req.user] = users;
        next();
      } else {
        res.sendStatus(401);
      }
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500).send("error data from database");
    });
};

const logout = (_, res) => {
  res.clearCookie("user").clearCookie("token").sendStatus(200);
};

module.exports = {
  getUserByEmailWithPasswordAndPassToNext,
  logout,
};
