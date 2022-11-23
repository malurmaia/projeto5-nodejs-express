const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db");

const User = db.define("category", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncremente: true,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }
});

module.exports = User;