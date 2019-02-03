var express = require ('express');
var app = express();
var router= express.Router();

const knex= require('./../db/knex');

/*router.get('/:id', (req, res)=>{

  const id = req.params.id;
    console.log(id)
  knex('credenciales')
      .where('id', id)
      .first()
      .then((user) => {
        if(user!=undefined) {
          console.log(user)
          //res.redirect(/usuarios);
          res.json({user:user});
          //res.render(login/sesion, {user:user})
        }else {
          //res.redirect("/login");
        }
      });

});


router.get('/',function(req, res){
   /* res.type('text/plain');
    res.send('Mi página principal');*/

       // res.render('login/login');


   // res.render('usuario');
//});


router.get('/',function(req, res){
   /* res.type('text/plain');logi
    res.send('Mi página principal');*/

        res.render('administrador/index');


   // res.render('usuario');
});

/*
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

      res.render('administrador/sesion',{user: user});
    } else {

        res.redirect('/admin');
      console.log("authenticado");
    }
  })
  .catch(function(error) {
    console.log(error);
});
});

*/

router.get('/cerrar', (req, res) => {  
    console.log("dsfn");
  res.render('login/logout');
});




module.exports= router;
