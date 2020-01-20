# User Collection Project (Task 1)
A node project for adding a user to database and populating user details 
 
# Initial Setup
Create a database with name "user_collection"
Please navigate to utils/database.js and make changes in the database configuaration (if required) as follows

const sequelize = new Sequelize('database_name','username','password',{
    dialect : 'mysql',
    host : 'host'
});

# Starting the App
In the command prompt navigate to the project folder location and type the following command

npm start

Once the application starts navigate to 

http://localhost:8000/

# Description
Navigate to add user page by clicking on "Add New" in the top nav. Fill in all the user details and click on the Add New button