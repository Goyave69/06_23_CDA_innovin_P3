const Joi = require("joi");

const tastingSheetValidator = (data, forCreation = true) => {
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

module.exports = tastingSheetValidator;
