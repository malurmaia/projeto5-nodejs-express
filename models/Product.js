const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db");

const Product= db.define("product", {
    id:{
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncremente: true,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    images: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price:{
        type: DataTypes.FLOAT,
        allowNull: false,
    }
});

module.exports = Product;