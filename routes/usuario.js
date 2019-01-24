var express = require ('express');

var router= express.Router();

const knex= require('./../db/knex');

console.log("valores knex" + knex);


router.get('/',function(req, res){
   /* res.type('text/plain');
    res.send('Mi página principal');*/
    knex('usuarios')
    .select()
    .then(usuario =>{
        res.render('usuario/user', {objUsers: usuario});
    });
    
   // res.render('usuario');
});

router.get('/new',function(req, res){
   /* res.type('text/plain');
    res.send('Mi página principal');*/
   
        res.render('usuario/new');
    
    
   // res.render('usuario');
});





module.exports= router;