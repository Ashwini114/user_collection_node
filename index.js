const express = require("express");
const bodyParser = require('body-parser');

const useRouter = require("./routes/users")
const sequelize = require('./utils/database')
const User = require('./models/users');
const UserRole = require('./models/user_roles')

const app = express();

app.set('view engine','ejs');
app.set('views','views')

app.use(bodyParser.urlencoded());

app.use(useRouter);

app.use((req, res, next)=>{
    res.send("<h1>404 page not found</h1>")
})

User.hasOne(UserRole, {foreignKey: 'user_id'})
UserRole.belongsTo(User, {foreignKey: 'user_id'})

sequelize.sync().then(result=>{
    console.log('Tables created successfully')
})
.catch(err=>{
    console.log(err);
})

app.listen(8000);