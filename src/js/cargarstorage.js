var avatares=localStorage.getItem("avatares");
if(avatares!=null || avatares!=undefined){
var arrayAvaters=JSON.parse(avatares);
var imagenese=JSON.parse(imagenes);
localStorage.setItem("avatares",JSON.stringify(arrayAvaters));
localStorage.setItem("imagenes",JSON.stringify(imagenese));
}
