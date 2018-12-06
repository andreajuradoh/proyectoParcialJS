
var avataresVerificando=localStorage.getItem("avatares");
if(avataresVerificando==null || avataresVerificando=="undefined"){

var avataresVerificacion=localStorage.getItem("avatares");
if(avataresVerificacion==null || avataresVerificacion==undefined){

var arrayAvaters=JSON.parse(avatares);
var imagenese=JSON.parse(imagenes);
localStorage.setItem("avatares",JSON.stringify(arrayAvaters));
localStorage.setItem("imagenes",JSON.stringify(imagenese));
}
