var express = require('express');
var router = express.Router();
var db = require('../models/db');
var bodyParser = require('body-parser');
var session = require('express-session');

module.exports=router;

router.get('/',function(req,res){
    
    db.getalluser(function(err,result){
        res.render('home',{userlist : result});

    });

});

router.get('/edit/:id',function(req,res){
    var id = req.params.id;
    db.edit(id,function(err,result){

        res.render('edit',{user : result});
    
    })
 
})