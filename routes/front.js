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




    router.get('/verRanking', (req, res) => {
      knex('partida')
          .select()
          .innerJoin('usuarios', function () {
          this
         .on('partida.id_usuarios', 'usuarios.id')


 })
        .orderBy('puntaje', 'desc')
          .limit(10)
          .then(partidas =>{
            let partidatmp=[];
            for (var i = 0; i < partidas.length; i++) {
            partidas[i].ranking=i+1;
            console.log( "partidas"+ partidas[i].ranking);
            }
              res.render('front/ranking', {objPartida: partidas});
          });

        });
    router.get('/guardarPartida:id_usuario:puntos',function(req, res){
       /* res.type('text/plain');
        res.send('Mi página principal');*/
        console.log("guardando..."+req.params.id_usuario);
        knex('partida')
        .insert({puntaje : req.params.puntos, id_usuarios : req.params.id_usuario })
        .then(ids =>  {

             res.json("ok");
        });


       // res.render('usuario');
    });
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
