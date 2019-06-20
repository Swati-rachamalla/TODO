const express = require('express');
const bodyParser = require('body-parser');
var loginController = require('./routes/loginRoute');
var todoController = require('./routes/TodoRoute');
var registerController = require('./routes/registrationRoute');
var homeController = require('./routes/homeController');
var session = require('express-session');
var path = require('path');
var cors = require('cors');

var app = express();
var corsOPtions = {
    origin : true,
    optionsSucessStatus : 200
}


app.use(session({
    secret : 'secret',
    resave : true,
    saveUninitialized : true 
}))
app.use(bodyParser.urlencoded({extended : true }))
app.use(bodyParser.json());
app.use(cors(corsOPtions));


app.get('/',(req,res)=>{
    console.log('home page');
    res.redirect('/login');
})
app.get('/home', homeController.home);
app.post('/login',loginController.login);
app.post('/register',registerController.register);
todoController.init(app);

app.listen(3000,()=>{console.log('server started')})



