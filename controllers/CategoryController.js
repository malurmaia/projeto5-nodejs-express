const sequelize = require('../db');
const Category = require('../models/Category');
const Op = sequelize.Op;

class CategoryController{
    async getCategories(params){
        let result;
        const limit = parseInt(params.limit),
              page = parseInt(params.page) -1;

        const paramsLimit = {
            offset: page * limit,
            limit: parseInt(limit)
        };
        if(params.q){
         result = await Category.findAll({
            where: {
                name: {
                    [Op.like]: `%${params.q.TolowerCase()}%`,
                },
            },
            ...paramsLimit,
        });
    }else{
        result = await Category.findAll(paramsLimit);
    }
        return result;
    }
   async getCategory(id){
        const result = await Category.findByPk(id);
        return result;
    }
    async updateCategory(id, data){
        console.log("dispara update")
    }
    async deleteCategory(id, data){

    }
}
   


module.exports = CategoryController