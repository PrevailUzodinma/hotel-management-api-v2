const Joi = require('joi').extend(require('@hapi/joi-oid'));


const roomValidationSchema = Joi.object({
    name: Joi.string().required(),
    roomtype: Joi.objectId().required(),
    price: Joi.number()
});

module.exports = roomValidationSchema;