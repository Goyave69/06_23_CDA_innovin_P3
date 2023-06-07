const Joi = require("joi");

const models = require("../models");

const validate = (data, forCreation = true) => {
  const presence = forCreation ? "required" : "optional";
  return Joi.object({
    degustation_date: Joi.string()
      .regex(/^([0-9]{4})-([0-9]{2})-([0-9]{2})$/)
      .presence(presence),
    shape: Joi.string().max(100).presence(presence),
    eye: Joi.string().max(100).presence(presence),
    nose: Joi.string().max(100).presence(presence),
    mouth: Joi.string().max(100).presence(presence),
    conclusion: Joi.string().max(100).presence(presence),
    note: Joi.number().min(0).max(10).presence(presence),
    commentaire: Joi.string().max(65535).presence(presence),
    wine_id: Joi.number().min(0).presence(presence),
    user_id: Joi.number().min(0).presence(presence),
  }).validate(data, { abortEarly: false });
};

const browse = (req, res) => {
  models.tastingSheet
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
  models.tastingSheet
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
  const tastingSheet = req.body;

  // TODO validations (length, format...)
  const { error } = validate(tastingSheet, false);
  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    const id = parseInt(req.params.id, 10);

    models.tastingSheet
      .update(id, tastingSheet)
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
  const tastingSheet = req.body;

  // TODO validations (length, format...)
  const { error } = validate(tastingSheet);
  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    models.tastingSheet
      .insert(tastingSheet)
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
  models.tastingSheet
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
