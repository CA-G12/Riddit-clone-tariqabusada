const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const { SECRET } = process.env;

const { signUpQuery } = require('../../database/queries');
const signUpSchema = require('../../validation/sign-up');

const signUp = (req, res, next) => {
    const {
        fullname,
        email,
        password,
    } = req.body;

    const { error, value } = signUpSchema.validate(req.body);

    if (!error) {
        bcrypt.hash(password, 10)
            .then((hashed) =>
                signUpQuery([fullname, email, hashed])
            )
            .then((data) => {
                const { id, img_url, job } = data.rows[0];
                console.log(id, img_url, job);
                jwt.sign({ id, fullname, email, img_url, job }, SECRET, { expiresIn: '365d' }, (error, token) => {
                    if (error) next(error);
                    res.cookie('token', "tokenf", { httpOnly: true })
                        .status(200)
                        .send({ message: 'welcome', data: data.rows[0], state: 'success' });
                });
            })
            .catch((error) => res.json({ message: error.message, state: 'fail' }));
    }
    else {
        res.send({ message: error.details[0].message, state: 'fail' });
    }
};

module.exports = signUp;
