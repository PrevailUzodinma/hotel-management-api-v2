const Joi = require('joi');


const roomValidationSchema = Joi.object({
    name: Joi.string().required(),
    roomtype: Joi.string().required(),
    price: Joi.number().required()
});

module.exports = roomValidationSchema;