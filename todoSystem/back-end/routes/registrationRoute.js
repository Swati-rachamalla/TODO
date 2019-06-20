var db = require('../database-util/dbutil');

exports.register = function(req,res){
    var today = new Date();
    var users = {
        first_name : req.body.firstName,
        last_name : req.body.lastName,
        email : req.body.email ,
        password : req.body.password ,
        created_date : today,
        modified_date : today
    }

    db.connection.query('insert into users SET ?',users,(err,row,field) => {
        if(!err){
            res.send({
                "code":200,
                "success":"user registered successfully"
            })
        }
        else{
            res.send({
                "code":400,
                "failed":"error occured"
            })
        }
    
    })

} 