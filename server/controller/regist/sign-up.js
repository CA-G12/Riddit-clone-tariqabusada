const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const { SECRET } = process.env;

const { signUpQuery } = require('../../database/queries');
const signUpSchema = require('../../validation/sign-up');

const signUp = (req, res, next) => {
    const {
        full_name,
        email,
        password,
    } = req.body;

    const { error, value } = signUpSchema.validate(req.body);

    if (!error) {
        bcrypt.hash(password, 9)
            .then((hashed) => signUpQuery([full_name, email, hashed]))
            .then((result) => {
                const { id, img_url, job } = result.rows[0];

                jwt.sign({ id, full_name, email, img_url, job }, SECRET, { expiresIn: '365d' }, (error, token) => {
                    if (error) next(error);
                    res.cookie('token', token, { httpOnly: true })
                        .status(200)
                        .send({ message: 'welcome', data: result.rows[0], state: 'sucess' });
                });
            })
            .catch((error) => res.json({ message: 'email was used by another person', state: 'fail' }));
    }
    else {
        res.send({ message: error.details[0].message, state: 'fail' });
    }
};

module.exports = signUp;
