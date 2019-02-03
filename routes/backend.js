var express = require ('express');
var app = express();
var router= express.Router();

const knex= require('./../db/knex');


router.get('/',function(req, res){
   /* res.type('text/plain');
    res.send('Mi página principal');*/
    
        res.render('login/login');

    
   // res.render('usuario');
});


router.get('/vertablas',function(req, res){
   /* res.type('text/plain');logi
    res.send('Mi página principal');*/
    
        res.render('admin/index');

    
   // res.render('usuario');
});













module.exports= router;