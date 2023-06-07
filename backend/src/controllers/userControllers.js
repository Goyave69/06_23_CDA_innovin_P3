const Joi = require("joi");

const models = require("../models");

const validate = (data, forCreation = true) => {
  const presence = forCreation ? "required" : "optional";
  return Joi.object({
    firstname: Joi.string().min(1).max(30).presence(presence),
    lastname: Joi.string().min(1).max(30).presence(presence),
    username: Joi.string().min(1).max(30).presence(presence),
    role: Joi.string().max(100).presence(presence),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .presence(presence),
    address: Joi.string().max(100).presence(presence),
    password: Joi.string()
      .regex(
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[\]:;<>,.?/~_+\-=|]).{8,32}$/
      )
      .presence(presence),
    phone: Joi.string()
      .regex(/^[0-9]{10}$/)
      .messages({ "string.pattern.base": `Phone number must have 10 digits.` })
      .presence(presence),
    avatar: Joi.string().max(255).presence("optional"),
    cart_id: Joi.number().presence(presence),
  }).validate(data, { abortEarly: false });
};

const browse = (req, res) => {
  models.user
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.user
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const user = req.body;

  // TODO validations (length, format...)
  const { error } = validate(user, false);
  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    const id = parseInt(req.params.id, 10);

    models.user
      .update(id, user)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  }
};

const add = (req, res) => {
  const user = req.body;

  // TODO validations (length, format...)
  const { error } = validate(user);
  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    models.user
      .insert(user)
      .then(([result]) => {
        res.location(`/users/${result.insertId}`).sendStatus(201);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  }
};

const destroy = (req, res) => {
  models.user
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
