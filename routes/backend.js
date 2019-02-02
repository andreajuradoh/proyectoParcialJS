var express = require ('express');
var app = express();
var router= express.Router();

const knex= require('./../db/knex');


router.get('/',function(req, res){
   /* res.type('text/plain');
    res.send('Mi página principal');*/
    
        res.render('administrador/index');

    
   // res.render('usuario');
});











module.exports= router;