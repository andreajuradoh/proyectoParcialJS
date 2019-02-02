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
  knex('usuarios')
  .whereNotExists(function() {
    this.select('*').from('partida').whereRaw('partida.id_usuarios = usuarios.id');
  })
  .then(usuario =>{
      res.render('tablapartida/new', {objUsers: usuario});
  });


});
//Funcion que renderiza una vista que venga por parametro
function respondAndRenderUser(id,res,viewName){
 if(typeof id != 'undefined'){
console.log("single partida");
    knex('partida')
      .select()
      .where('id',id)
      .first()
      .then(partida => {
        res.render(viewName,{partida: partida});
    });
  }else{

    console.log('error invalid id ');
    res.status(500);
    res.render('error', {
      message: 'Invalid ID user'
    });
  }
}
//** Pagina para mostar una partida creada o editada
router.get('/:id', (req, res) => {
  const id = req.params.id;
  respondAndRenderUser(id,res,'tablapartida/single');

});
//** Guardar La partida**
router.post('/guardar', (req, res) => {
console.log("guarda partida"+req.body.usuario);
    knex('partida')
      .returning('id')
      .insert({puntaje : req.body.puntaje, id_usuarios : req.body.usuario})
      .then(ids =>  {
        const id = ids[0];
        res.redirect(`/admin/partidas/${id}`);

  });
});




router.get('/:id/edit', (req,res) => {
  const id = req.params.id;
  console.log('edit id:'+id);
  respondAndRenderUser(id,res,'tablapartida/edit');
});



router.put('/:id',(req,res) => {
  console.log('updating... huele bicho');
    knex('partida')
      .where('id',req.params.id)
      .update({puntaje: req.body.puntaje})
      .then( () =>  {
        res.redirect(`/admin/partida/${req.params.id}`);
      });

});


//form delete por post
router.delete('/:id',(req,res)=>{
  const id=req.params.id;
  console.log('deleting...');

 if(typeof id != 'undefined'){
    knex('partida')
      .where('id',id)
      .del()
      .then(partida => {
        console.log('delete id: '+id);
        res.redirect('/admin/partidas');
    });

  }else{

    console.log('error invalid delete ');
    res.status(500);
    res.render('error', {
      message: 'Invalid ID delete '
    });
  }
});





module.exports= router;
