const Product = require("../models/Product");
const { Sequelize } = require('sequelize');
const sequelize = require("../db");
const Op = sequelize.Op;

class ProductController{
    async getProducts(params){
        let result;
        const limit = parseInt(params.limit),
              page = parseInt(params.page) -1;

        const paramsLimit = {
            offset: page * limit,
            limit: parseInt(limit)
        };
        if (params.q){
            result = Product.findAll({
                where: {
                    name: {
                        [Op.like]:`%${params.q}%`
                    }
                }
            });
        }else{
            result 
        }
        return result;
    }
    async getProduct(){
        const result = await Product.findByPk(id);
        return result;
    }
}



module.exports = ProductController