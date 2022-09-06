const connection = require('../config/connection');

const loginQuery = (email) => {
    const sql = {
        text: 'SELECT id, full_name, password As hashedPassword, img_url FROM users WHERE email = ($1)',
        values: [email],
    }
    return connection.query(sql);
};

module.exports = {loginQuery};
