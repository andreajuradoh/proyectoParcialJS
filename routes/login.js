router.post('/auth', (req, res) => {  
 const usuario=req.body.user;
 const password=req.body.password;
   console.log("prueba",usuario); 
  knex('credenciales')
  .where({ usuario: user })
  .select('password')
  .select('id')  
  .then(function(result) {
    if (!result || !result[0])  {  // not found!
      console.log("Invalido user"); 
      return;
    }
    var pass = result[0].password;
    if (password === pass) {
        var user= result[0].id;
        console.log("usuario", user);
        
      res.render('login/prueba', {user: user});
    } else {
      console.log("authenticado"); 
    }
  })
  .catch(function(error) {
    console.log(error);
});
});
