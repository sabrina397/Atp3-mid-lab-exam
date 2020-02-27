var express = require('express');
var router = express.Router();
var db = require('../models/db');
var bodyParser = require('body-parser');
var session = require('express-session');
var mysql = require('mysql');
var regmodel = require.main.require('./models/reg-model');
//const { check, validationResult } = require('express-validator');


module.exports = router;

router.use(bodyParser.urlencoded({extended : true}));
router.use(bodyParser.json());


router.get('/',function(req,res){
    res.render('login.ejs');
})
var con = mysql.createConnection({

    host : 'localhost',
    user : 'root',
    password : '',
    database : 'prac'
});

router.use(session({

    secret: 'secret',
    resave : true ,
    saveUninitialized : true 

}));


router.post('/', function(request , response){
    var reg={
        username : request.body.username,
        password : request.body.password,
    }
    regmodel.validate(reg,function(status){
        if (status){
            regmodel.getType(reg,function(result){
                // console.log('Here');
                // var type = JSON.stringify(result.type.toString());
                // console.log(type);
                if (result.type=='"admin"'){
                    response.redirect('/admin');
                }
                else{
                    response.send('no admin');
                }
            })
        }
        else{
                    response.redirect('/login');
        }
    });
    // db.login(username,password,function(err,result){
    //     if(result.length>0){
    //         res.redirect('/admin');
    //     }
    //     else{
    //         res.redirect('/login');
    //     }
    //});  
});