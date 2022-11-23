const Sequelize = require('sequelize')

const dbName = 'teste'
const dbUser = 'root';
const dbHost = 'localhost';
const dbPassword = '123456789'

const sequelize = new Sequelize(dbName, dbUser,dbPassword ,{
    dialect: "mysql",
    host: dbHost,
});

module.exports = sequelize;