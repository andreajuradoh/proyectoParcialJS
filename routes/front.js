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
    


router.get('/jugar/:nivel', (req, res) => {
   
        res.render('front/juego');
    });
    




module.exports = router;