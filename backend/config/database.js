const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.MYSQL_DATABASE,
    process.env.MYSQL_USER,
    process.env.MYSQL_PASSWORD,
    {
        host: process.env.MYSQL_HOST,  // Must be 'db'
        dialect: 'mysql',
        port: process.env.DB_PORT,     // Port should be 3306 inside Docker
        logging: console.log           // This enables logging to the console
    }
);

module.exports = sequelize;
