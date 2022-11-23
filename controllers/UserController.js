const User = require("../models/User")
class UserController{
    getUser(){
        return[
            {
                id: 1,
                name: "Maria Luisa",
            },
            {
                id:2,
                name: "Fellipe Hazan",
            },
        ];
    }
}

module.exports = UserController