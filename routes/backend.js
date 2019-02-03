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


router.post('/auth', (req, res) => {  
 const usuario=req.body.user;
 const password=req.body.password;
   console.log("prueba",usuario); 
  knex('credenciales')
  .where({ user: usuario })
  .select('password')
  .select('id')  
  .then(function(result) {
    if (!result || !result[0])  {  // not found!
      console.log("Invalido user"); 
          res.redirect('/admin');
      return;
    }
    var pass = result[0].password;
    if (password === pass) {
        var user= result[0].id;
        console.log("usuario", user);
        
      res.render('administrador/index');
    } else {
        
        res.redirect('/admin');
      console.log("authenticado"); 
    }
  })
  .catch(function(error) {
    console.log(error);
});
});


router.get('/cerrar', (req, res) => {  
    console.log("dsfn");
  res.render('login/logout');
});





module.exports= router;