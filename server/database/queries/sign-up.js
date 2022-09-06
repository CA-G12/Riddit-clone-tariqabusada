const connection = require('../config/connection');

const signUpQuery = ( userInfo ) => {   // [userInfo] must be an array
    const sql = {
        text: 'INSERT INTO users(full_name, email, password, img_url, job) VALUES ($1,$2,$3,$4,$5)',
        values: userInfo
    }
    return connection.query(sql);
};

module.exports = {signUpQuery};
