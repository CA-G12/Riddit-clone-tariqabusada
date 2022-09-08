const connection = require('../config/connection');

const signUpQuery = (values) => connection
    .query('INSERT INTO users(full_name, email, password) VALUES ($1,$2,$3) RETURNING *', values);

module.exports = { signUpQuery };
