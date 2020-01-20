const Sequelize = require('sequelize');

const sequelize = require('../utils/database')

const User = sequelize.define('users',{
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    },
    first_name :{
        type : Sequelize.STRING
    },
    last_name :{
        type : Sequelize.STRING
    },
    email :{
        type : Sequelize.STRING
    }
})

module.exports = User;