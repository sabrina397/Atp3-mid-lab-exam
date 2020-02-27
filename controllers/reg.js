var express = require('express');
var router = express.Router();
var db = require('../models/db');
var bodyParser = require('body-parser');
var regmodel = require.main.require('./models/reg-model');

//const { check, validationResult } = require('express-validator');


module.exports = router;

router.use(bodyParser.urlencoded({extended : true}));
router.use(bodyParser.json());


router.get('/',function(req,res){
res.render('reg.ejs');
    });



router.post('/',function(req,res){
            var name = req.body.name;
            var contact = req.body.contact;
            var type = req.body.type;
            
            var username = req.body.username;
            var password = req.body.password;
            regmodel.insertuser(name,type,contact,username,password,function(err,result){
                if(result){
                    console.log('user registered');               
                }               
            });            
});