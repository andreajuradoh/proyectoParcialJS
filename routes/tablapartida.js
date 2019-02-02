var express = require ('express');
var app = express();
var router= express.Router();

const knex= require('./../db/knex');


router.get('/',function(req, res){
   /* res.type('text/plain');
    res.send('Mi página principal');*/
    knex('partida')
        .select()
        .innerJoin('usuarios', function () {
        this
       .on('partida.id_usuarios', 'usuarios.id')


})
    .then(partida =>{
        res.render('tablapartida/index', {objPartidas: partida});
    });


});
//** RENDERIZA FORMULARIO PARA CREAR NUEVO USUARIO**
router.get('/new', (req, res) => {
  res.render('tablapartida/new' );
});
module.exports= router;
