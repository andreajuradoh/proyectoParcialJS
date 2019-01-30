var express = require ('express');
var app = express();
var router= express.Router();

const knex= require('./../db/knex');


router.get('/',function(req, res){
   /* res.type('text/plain');
    res.send('Mi página principal');*/
    knex('usuarios')
    .select()
    .then(usuario =>{
        res.render('administrador/tablasadmin', {objUsers: usuario});
    });
    
   // res.render('usuario');
});



//read get tablas
router.get('/',function(req, res){
   /* res.type('text/plain');
    res.send('Mi página principal');*/
    knex('usuarios')
    .select()
    .then(usuario =>{
        res.render('administrador/tablasadmin', {objUsers: usuario});
    });
    
   // res.render('usuario');
});



//
//router.get('/new', (req, res) => {
//  res.render('usuario/new', { title: "Form Users" });
//});



function validateTodoRenderError(req, res, callback){
    const usuarios={
        foto: req.body.input_foto,
        genero: req.body.genero,
         nombre: req.body.nombre,
         puntaje: req.body.puntaje
        
    };
    
    console.log(usuarios);
    callback(usuarios);
}


//create por post
router.post('/', (req, res) => {  
  validateTodoRenderError(req, res,(usuarios)=>{
    knex('usuarios')
      .returning('id')
      .insert(usuarios, 'id')
      .then(ids =>  {
        const id = ids[0];
        res.redirect(`/usuario/${id}`);
      });

});
});


// router read show /user/id 
router.get('/:id', (req, res) => {
  const id = req.params.id;
  respondAndRenderUser(id,res,'usuario/single');
  
});










module.exports= router;