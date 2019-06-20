var db = require('../database-util/dbutil');
var session = require('express-session');

module.exports.home = function (req,res){
    if(req.session.loggedin){
        res.send('welcome back '+ req.session.email);
    }else{
        res.send('please login to view this page');
    }
}