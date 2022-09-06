const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const { SECRET } = process.env;
const { loginQuery } = require('../../database/queries');
const logInSchema = require('../../validation/log-in');

const signIn = (req, res, next) => {
    const { email, password } = req.body;
    const { error, value } = logInSchema.validate(req.body);

    if (error) {
        res.sendStatus(401);
    } else {
        loginQuery(email)
            .then((result) => {
                if (result.rows.length !== 0) {
                    const {
                        hashedPassword,
                        id,
                        name,
                        img_url,
                    } = data.rows[0];

                    bcrypt.compare(password, hashedPassword, (error, data) => {
                        if (error) next(error);
                        if (!data) res.status(200).json({ message: 'invalid Input' });
                        else {
                            const token = jwt.sign({
                                id,
                                name,
                                email,
                                img_url,
                            }, SECRET);
                            res.cookie('token', token, { httpOnly: true }).json({ message: 'successful' });
                        }
                    });
                } else {
                    res.status(401).json({ message: 'invalid Input' });
                }
            });
    }
};

module.exports = signIn;