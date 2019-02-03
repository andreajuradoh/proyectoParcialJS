var express = require ('express');
var app = express();
var router= express.Router();

var scripts = [{ script: '/js/image.js' }];

const knex= require('./../db/knex');


router.get('/',function(req, res){
   /* res.type('text/plain');
    res.send('Mi página principal');*/
    knex('imagenes')
    .select()
    .then(imagenes =>{
        res.render('tablaimagenes/index', {objImagenes: imagenes});
    });

   // res.render('usuario');
});



router.get('/new', (req, res) => {
  res.render('tablaimagenes/new' );
});

//muestra usuario creado
function respondAndRenderUser(id,res,viewName){
  if(typeof id != 'undefined'){
    knex('imagenes')
      .select()
      .where('id',id)
      .first()
      .then(imagenes => {
        res.render(viewName,{imagenes: imagenes});
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
  respondAndRenderUser(id,res,'tablaimagenes/single');

});

//routing new + form + post mostrar create avatar
router.post('/guardar', (req, res) => {

      console.log("entro"+req.body.fotoadd);
    knex('imagenes')
      .returning('id')
      .insert({foto : req.body.fotoadd, puntaje: req.body.puntos})
      .then(ids =>  {
        const id = ids[0];
        res.redirect(`/admin/imagenes/${id}`);

  });
});


//elimina usuario creado delete + form

router.delete('/:id',(req,res)=>{
  const id=req.params.id;
  console.log('deleting...');

 if(typeof id != 'undefined'){
    knex('imagenes')
      .where('id',id)
      .del()
      .then(usuarios => {

        console.log('delete id: '+id);
        res.redirect('/admin/imagenes/');

    });

  }else{

    console.log('error invalid delete ');
    res.status(500);
    res.render('error', {
      message: 'Invalid ID delete '
    });
  }
});


router.get('/:id/edit', (req,res) => {
  const id = req.params.id;
  console.log('edit id:'+id);
  respondAndRenderUser(id,res,'tablaimagenes/edit');
});





router.put('/:id',(req,res) => {
  console.log('updating... huele bicho');
    knex('imagenes')
      .where('id',req.params.id)
      .update({foto : req.body.fotoadd,  puntaje: req.body.puntaje})
      .then( () =>  {
        res.redirect(`/admin/imagenes/${req.params.id}`);
      });

});



module.exports= router;
