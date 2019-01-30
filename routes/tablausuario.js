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

//muestra usuario creado
function respondAndRenderUser(id,res,viewName){  
  if(typeof id != 'undefined'){
    knex('usuarios')
      .select()
      .where('id',id)
      .first()
      .then(usuarios => {
        res.render(viewName,{usuarios: usuarios});
    });
  }else{
    
    console.log('error invalid id ');   
    res.status(500);
    res.render('error', {
      message: 'Invalid ID user' 
    });    
  }  
}
router.get('/:id', (req, res) => {
  const id = req.params.id;
  respondAndRenderUser(id,res,'tablausuario/single');
  
});

//routing new + form + post mostrar create avatar
router.post('/guardar', (req, res) => {  
 
      console.log("entro mmv"+req.body.fotoadd);
    knex('usuarios')
      .returning('id')
      .insert({foto : req.body.fotoadd, genero : req.body.genero, nombre: req.body.nombre, puntos: req.body.puntos})
      .then(ids =>  {
        const id = ids[0];
        res.redirect(`/admin/usuarios/${id}`);
     
  });
});




module.exports= router;