var express = require('express');
var router = express.Router();
const knex = require('../db/knex');

router.get('/', (req, res) => {
      console.log("hola");
      res.render('front/index');

});

router.get('/escoger', (req, res) => {
    knex('usuarios')
    .select()
    .then(usuario =>{
        res.render('front/escogeavatar', {objUsers: usuario});
    });


});


router.get('/instrucciones', (req, res) => {

        res.render('front/instrucciones');
    });

router.get('/video', (req, res) => {

        res.render('front/video');
    });

router.get('/consultUserId:id', (req, res) => {
const id= req.params.id;
console.log("consultando..."+id);
  knex('usuarios')
  .where('id', id)
  .first()
  .then((user) => {
    if(user!=undefined) {

      //res.redirect(/usuarios);
      res.json({user:user});
      //res.render(login/sesion, {user:user})
    }
  });

  });

router.get('/jugar:nivel', (req, res) => {
console.log(req.params.nivel);
        res.render('front/juego', {nivel: req.params.nivel});
    });

  /*  router.put('/:id_administrador',(req,res) => {
      console.log('updating...');
      validateUserInsertUpdateRedirect(req,res,(user) => {
        knex('Administrador')
          .where('id_administrador',req.params.id_administrador)
          .update({usuario : req.body.usuario,
          password : req.body.password   })
          .then( () =>  {
            res.redirect(`/user/${req.params.id_administrador}`);
          });
      });
    });*/
router.post('/actualizaPuntaje:id:puntos', (req, res) => {
         const id= req.params.id;
         const puntos= req.params.puntos;

        console.log("editando..."+puntos, id);
          knex('usuarios')
          .where('id',id)
          .update({puntos : puntos })
          .then( () =>  {
          res.json("ok");
          });

          });

router.get('/consultImagenes', (req, res) => {

    console.log("consultando...");
      knex('imagenes')
      .then((imagenes) => {
        if(imagenes!=undefined) {
          //res.redirect(/usuarios);

          res.json({imagenes:imagenes});
          //res.render(login/sesion, {user:user})
        }
      });

      });


module.exports = router;
