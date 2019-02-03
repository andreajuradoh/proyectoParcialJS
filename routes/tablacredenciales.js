var express = require ('express');
var router = express.Router();
const knex = require('../db/knex');


router.get('/',function(req, res){
   /* res.type('text/plain');
    res.send('Mi página principal');*/
    knex('credenciales')
    .select("credenciales.id", "credenciales.user", "credenciales.password", "credenciales.rol", "usuarios.id as id_usuario", "usuarios.nombre")
    .innerJoin('usuarios', function () {
    this
   .on('credenciales.id_usuarios', 'usuarios.id')


  })
    .then(credenciales =>{
        res.render('tablacredenciales/index', {objCredenciales: credenciales});
    });

   // res.render('usuario');
});
//** RENDERIZA FORMULARIO PARA CREAR NUEVO USUARIO**
router.get('/new', (req, res) => {
  knex('usuarios')
  .whereNotExists(function() {
    this.select('*').from('credenciales').whereRaw('credenciales.id_usuarios = usuarios.id');
  })
  .then(usuario =>{
    console.log("tamño"+usuario.length);
    if(usuario.length==0){
      res.render("tablacredenciales/error");
    }else
      res.render('tablacredenciales/new', {objUsers: usuario});
  });


});
//Funcion que renderiza una vista que venga por parametro
function respondAndRenderUser(id,res,viewName){
 if(typeof id != 'undefined'){
console.log("single partida");
    knex('credenciales')
      .select()
      .where('id',id)
      .first()
      .then(credencial => {
console.log(credencial.user);
        res.render(viewName,{credencial: credencial});
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
  respondAndRenderUser(id,res,'tablacredenciales/single');

});
//** Guardar La partida**
router.post('/guardar', (req, res) => {
console.log("guarda partida"+req.body.usuario);
    knex('credenciales')
      .returning('id')
      .insert({user : req.body.user,password: req.body.password, rol: req.body.rol, id_usuarios : req.body.usuario})
      .then(ids =>  {
        const id = ids[0];
        res.redirect(`/admin/credenciales/${id}`);

  });
});
//elimina usuario creado delete + form
router.delete('/:id',(req,res)=>{
  const id=req.params.id;
  console.log('deleting...');

 if(typeof id != 'undefined'){
    knex('credenciales')
      .where('id',id)
      .del()
      .then(credenciales => {
        console.log('delete id: '+id);
        res.redirect('/admin/credenciales');
    });

  }else{

    console.log('error invalid delete ');
    res.status(500);
    res.render('error', {
      message: 'Invalid ID delete '
    });
  }
});

//** Editar credencial**

router.get('/:id/edit', (req,res) => {
  const id = req.params.id;
  console.log('edit id:'+id);
  respondAndRenderUser(id,res,'tablacredenciales/edit');
});








router.put('/:id',(req,res) => {
//  console.log('updating... huele bicho mmv'+req.params.id);
    knex('credenciales')
      .where('id',req.params.id)
      .update({user : req.body.user, password: req.body.password, rol: req.body.rol})
      .then( () =>  {
        res.redirect(`/admin/credenciales/${req.params.id}`);
      });

});


module.exports= router;
