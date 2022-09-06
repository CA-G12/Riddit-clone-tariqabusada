const joi = require('joi');

const signUpSchema = joi.object({
    full_name: joi
        .string()
        .alphanum()
        .min(6)
        .max(80)
        .required(),
    email: joi
        .string()
        .min(8)
        .max(80)
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),
    password: joi
        .string()
        .alphanum()
        .required(),
    repeat_password: joi
        .ref('password'),
});

module.exports = signUpSchema;
