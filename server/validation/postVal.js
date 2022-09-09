const joi = require('joi');

const postSchema = joi.object({
    content: joi
        .string()
        .min(6)
        .required(),
    img: joi
        .string()
        .min(4)
        .required(),
    user_id: joi
        .number()
        .required(),
});

module.exports = postSchema;
