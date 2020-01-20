const Sequelize = require('sequelize');

const sequelize = require("../utils/database");

const User_Role = sequelize.define('user_roles',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    },
    user_id : {
        type : Sequelize.INTEGER
    },
    role_id : {
        type : Sequelize.INTEGER
    }
});

module.exports = User_Role;