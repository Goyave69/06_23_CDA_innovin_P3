const Joi = require("joi");

const wineValidator = (data, forCreation = true) => {
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

module.exports = wineValidator;
