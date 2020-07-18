require('dotenv').config();
const mysql = require('mysql2/promise');

mysql.createConnection({
    user: process.env.DBuser,
    password: process.env.DBpass,
    database: process.env.DBname,
});