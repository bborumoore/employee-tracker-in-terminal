require('dotenv').config();

const connection = mysql.createConnection({
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });

module.exports = connection;