const Joi = require('joi');

const roomtypeValidationSchema = Joi.object({
    name: Joi.string().required()
});

module.exports = roomtypeValidationSchema;