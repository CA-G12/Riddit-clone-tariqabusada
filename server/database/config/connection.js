const { Pool } = require('pg');
require('dotenv').config('.env');

const {
    NODE_ENV,
    DB_URL,
    TEST_DB,
    DATABASE_URL,
} = process.env;

let URL = '';

if (NODE_ENV === 'development') URL = DB_URL;
else if (NODE_ENV === 'production') URL = DATABASE_URL;
else if (NODE_ENV === 'test') URL = TEST_DB;
else throw Error('There is no database url !!');

const connection = new Pool({
    connectionString: URL,
    ssl: false,
});

module.exports = connection;
