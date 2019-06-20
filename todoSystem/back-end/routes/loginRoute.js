var db = require('../database-util/dbutil');
var session = require('express-session');
const mysql = require('mysql');

module.exports.login = function (req,res){
    var email =req.body.email;
    var password = req.body.password;
    console.log('request received');
    if( email && password){
        db.connection.query('select * from users where email = ?',[email], (error,row,field)=>{
            if(row.length > 0){
                if(row[0].password === password){
                    req.session.loggedin = true;
                    req.session.email = email;
                    res.redirect('/home');
                }
            }
            else{
                res.send({
                    "code":204,
                    "success":"email doesnot exist"
                });
            }
            res.end();
    });
}
    else{
            res.send({
                "code":400,
                "failed":"error occured"
            });
            res.end();
    }

};