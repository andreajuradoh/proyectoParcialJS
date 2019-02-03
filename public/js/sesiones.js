var usuario = localStorage.getItem("usuario");

if(usuario==null || usuario==undefined){
     console.log("sesion"+usuario);
      window.location="/login"
     //window.location="/user/login"
}
