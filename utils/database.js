const Sequelize = require('sequelize');

const sequelize = new Sequelize('user_collection','root','',{
    dialect : 'mysql',
    host : 'localhost'
});



module.exports = sequelize;


