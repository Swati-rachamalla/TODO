var db = require('../database-util/dbutil');
const mysql = require('mysql');

function init(app){

    app.get( "/todo" ,( req, res ) => {
    	db.connection.query( "select * from todo" , (err,row,field) => {
            if( !err ){
				// Object.keys(row.rows[row.length]).forEach((key) => {
				// 	key.todo_name=name;
				// 	key.todo_number=id;
				// 	key.todo_desc=desc;
				// })

				// Object.keys(row).forEach( (key) => {
				// 	var row = row[key];
				// 	console.log(row.name);
				// })
				console.log(row);
				res.json(row);
			}
            else
                console.log( err );
    	})
	});

    app.post( "/todo" , ( req, res ) => {
        let sql ="insert into todo SET ?";
        let data={
            todo_name : req.body.name,
            todo_desc : req.body.desc,
        }
        db.connection.query(sql,data, (err,result)=>{
            if( !err )
                res.redirect('/todo');
            else
                console.log( err );
            
        })
    });
    app.get( "/todo/:id" , ( req, res ) => {
        let query="select * from todo where ? ";
       
        let data={
            todo_number:req.params.id
        }
        db.connection.query( query,data, (err,row,field)=>{
            if( !err )
                res.send( row );
            else
                console.log( err );
        })
    });

    app.put( "/todo/:id" , ( req, res) => {
        console.log('update')
        let data={
            todo_name : req.body.name,
            todo_desc : req.body.desc,
        }
        console.log('inside update');
        
        console.log(data);
        db.connection.query( `update todo set ? where todo_number=?`, [data,req.params.id],(err,row,field)=>{
            if( !err )
            res.send({
				"code":200,
				"success":"updated successfully"
			});
        })
    });

    app.delete( "/todo/:id" , ( req,res ) => {
        let query="delete from todo where ?";
        let data={
            todo_number:req.params.id
        }
        db.connection.query( query,data ,(err,row,field) =>{
            if( !err )
			res.send({
				"code":200,
				"success":"deleted entry successfully"
			});
        })
    });
}

module.exports.init = init;