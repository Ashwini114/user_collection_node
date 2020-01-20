const path = require("path")
const UserModel = require('../models/users');
const UserRoleModel = require('../models/user_roles')

/** 
 * Fetching all users  and populating it in use-list view 
 * */
exports.userList = (req,res,next)=>{
    UserModel.findAll({include: [UserRoleModel]}).then(data => {
        res.render('user-list',{users:data,title:'User list'})
        console.log(data[0].dataValues.first_name)
    }).catch(err=>{
        console.log(err);
    })
    
};

/* 
* Rendering add-user view
 */
exports.addUser = (req,res,next)=>{
    res.render('add-user')
};
/*
* Adding new user and user role to its respective tables and redirecting to user list page
 */
exports.newUser = (req,res,next)=>{
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    UserModel.count().then(count=>{
        UserModel.create({
        first_name : first_name,
        last_name : last_name,
        email : email
        })
        .then(user_res=>{
            
            return {user_id : user_res.dataValues.id, count : count }
        })
        .then(user_data => {
            UserRoleModel.create({
                user_id : user_data.user_id,
                role_id : (user_data.count == 0)?1:2  // 1 stands for admin and 2 stands for other role

            })
            .then(role => {
                res.redirect("/")
            })
        })
    })
    .catch(err=>{
        console.log(err);
    })

    
};