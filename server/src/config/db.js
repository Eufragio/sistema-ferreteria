require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.MYSQL_DATABASE || process.env.MYSQLDATABASE || process.env.DB_NAME,
    process.env.MYSQL_USER     || process.env.MYSQLUSER     || process.env.DB_USER,
    process.env.MYSQL_PASSWORD || process.env.MYSQLPASSWORD || process.env.DB_PASSWORD,
    {
        host: process.env.MYSQL_HOST || process.env.MYSQLHOST || process.env.DB_HOST,
        port: process.env.MYSQL_PORT || process.env.MYSQLPORT || 3306,
        dialect: 'mysql',
        logging: false,
        timezone: '-05:00',
        pool: { max: 10, min: 0, acquire: 30000, idle: 10000 }
    }
);

module.exports = sequelize;
