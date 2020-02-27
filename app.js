var express = require('express');
var session = require('express-session');
//var expressValidator = require('express-validator');
var ejs = require('ejs');
var bodyParser = require('body-parser');





var reg = require('./controllers/reg');
var login = require('./controllers/login');
var home = require('./controllers/home');





var app = express();

app.set('view engine', 'ejs');


app.use('/register',reg);
app.use('/login',login);
app.use('/home' , home);

app.listen(3000,function(req,res){
    console.log('server started');
});