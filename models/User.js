const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db");

const User = db.define("user", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncremente: true,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password:{
        type: DataTypes.FLOAT,
        allowNull: false,
    }
});

module.exports = User;