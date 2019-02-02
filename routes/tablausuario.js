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



router.get('/:id/edit', (req,res) => {
  const id = req.params.id;
  console.log('edit id:'+id);
  respondAndRenderUser(id,res,'tablausuario/edit');
});



//funcion del edit
function validateUserInsertUpdateRedirect(req,res,callback){
  if(validUser(req.body)){
     //inser into db
    const usuarios = {
      foto : req.body.fotoadd
    };
    callback(usuarios);
    console.log("created");
  }else{
    //responde with an error
    console.log('error on created');
    res.status(500);
    res.render('error', {
      message: 'Invalid user at created'
    });
  }
}


//elimina usuario creado delete + form
router.delete('/:id',(req,res)=>{
  const id=req.params.id;
  console.log('deleting...');

 if(typeof id != 'undefined'){
    knex('usuarios')
      .where('id',id)
      .del()
      .then(usuarios => {
        console.log('delete id: '+id);
        res.redirect('/admin/usuarios');
    });

  }else{

    console.log('error invalid delete ');
    res.status(500);
    res.render('error', {
      message: 'Invalid ID delete '
    });
  }
});




router.put('/:id',(req,res) => {
  console.log('updating... huele bicho');
    knex('usuarios')
      .where('id',req.params.id)
      .update({foto : req.body.fotoadd, genero: req.body.genero, puntos: req.body.puntos, nombre: req.body.nombre})
      .then( () =>  {
        res.redirect(`/admin/usuarios/${req.params.id}`);
      });

});




module.exports= router;
