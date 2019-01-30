var express = require ('express');
var app = express();
var router= express.Router();

var scripts = [{ script: '/js/image.js' }];

const knex= require('./../db/knex');


router.get('/',function(req, res){
   /* res.type('text/plain');
    res.send('Mi página principal');*/
    knex('usuarios')
    .select()
    .then(usuario =>{
        res.render('tablausuario/index', {objUsers: usuario});
    });
    
   // res.render('usuario');
});



router.get('/new', (req, res) => {
  res.render('tablausuario/new' );
});




//routing new + form + post mostrar create avatar
router.post('/', (req, res) => {  
 
      console.log("entro");
    knex('usuarios')
      .returning('id')
      .insert({foto : req.body.url, genero : req.body.genero, nombre: req.body.nombre, puntos: req.body.puntos})
      .then(ids =>  {
        const id = ids[0];
        res.redirect(`/tablausuario/${id}`);
     
  });
});




module.exports= router;