const mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password : 'admin',
    database : 'todo-database'
});

connection=mysqlConnection.connect((err)=>{
    if(!err){
        console.log(" database connected");
    }
    else{
        throw new Error(err);
    }
})

module.exports.connection = mysqlConnection;