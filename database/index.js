const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'db4free.net',
    user:'badgrav1',
    password: 'ammagg291088',
    database: 'gammapedia1',
    port: 3306
});

module.exports = conn;