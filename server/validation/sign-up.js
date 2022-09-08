const joi = require('joi');

const signUpSchema = joi.object({
    fullname: joi
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
    rePassword: joi
        .ref('password'),
});

module.exports = signUpSchema;
