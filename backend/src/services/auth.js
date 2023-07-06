const jwt = require("jsonwebtoken");
const argon2 = require("argon2");

const { JWT_SECRET, JWT_TIMING } = process.env;

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const verifyPassword = (req, res) => {
  argon2
    .verify(req.user.password, req.body.password, hashingOptions)
    .then((isVerified) => {
      if (isVerified) {
        const payload = { sub: req.user.id };

        const token = jwt.sign(payload, JWT_SECRET, {
          expiresIn: JWT_TIMING,
        });

        delete req.user.hashedPassword;
        delete req.user.password;
        res
          .cookie("id", req.user.id, {
            httpOnly: true,
          })
          .cookie("token", token, {
            httpOnly: true,
          })
          .sendStatus(200);
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = { verifyPassword };
