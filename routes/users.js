const express = require("express");
const path = require("path")
const userController = require("../controllers/users")
const userModel = require('../models/users')
const userRole = require('../models/user_roles')

const router = express.Router();

router.get("/",userController.userList)

router.get("/add-user",userController.addUser)

router.use("/new-user",userController.newUser)

module.exports = router;