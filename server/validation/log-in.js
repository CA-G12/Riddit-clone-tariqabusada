const joi = require('joi');

const logInSchema = joi.object({
    email: joi
        .string()
        .max(80)
        .min(8)
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] }}),
    password: joi
        .string()
        .alphanum()
        .required(),
});

module.exports = logInSchema;
