const Joi = require("joi");

const userValidator = (data, forCreation = true) => {
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
    cart_id: Joi.number().min(0).presence(presence),
  }).validate(data, { abortEarly: false });
};

module.exports = userValidator;
