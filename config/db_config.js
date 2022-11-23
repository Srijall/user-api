const { Sequelize } = require('sequelize');

const db = new Sequelize({
    database: process.env.DB_NAME || 'infodev-user',
    username: process.env.USER || 'postgres',
    password: process.env.PASSWORD || 'nimesh12',
    dialect: 'postgres',
    port: process.env.DB_PORT || 5432,
    host: process.env.DB_HOST || 'localhost',
    logging: true
})
module.exports = db;