const mysql = require('mysql2');

require('dotenv').config();

// Connect to database
const connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user: 'root',
    password: 'password',
    database: 'employees'
});

module.exports = connection;