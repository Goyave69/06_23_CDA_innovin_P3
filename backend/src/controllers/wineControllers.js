const Joi = require("joi");

const models = require("../models");

const validate = (data, forCreation = true) => {
  const presence = forCreation ? "required" : "optional";
  return Joi.object({
    name: Joi.string().max(100).presence(presence),
    year: Joi.number().min(0).max(3000).presence(presence),
    wine_type: Joi.string().max(10).presence(presence),
    origin_country: Joi.string().max(100).presence(presence),
    region: Joi.string().max(100).presence(presence),
    grape_variety: Joi.string().max(100).presence(presence),
    description: Joi.string().max(65535).presence(presence),
    best_seller: Joi.boolean().presence(presence),
    image: Joi.string().max(255).presence("optional"),
    price: Joi.number().min(0).max(10000).presence(presence),
  }).validate(data, { abortEarly: false });
};

const browse = (req, res) => {
  models.wine
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
  models.wine
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
  const wine = req.body;

  // TODO validations (length, format...)
  const { error } = validate(wine, false);
  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    const id = parseInt(req.params.id, 10);

    models.wine
      .update(id, wine)
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
  const wine = req.body;

  // TODO validations (length, format...)
  const { error } = validate(wine);
  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    models.wine
      .insert(wine)
      .then(([result]) => {
        res.location(`/wines/${result.insertId}`).sendStatus(201);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  }
};

const destroy = (req, res) => {
  models.wine
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
