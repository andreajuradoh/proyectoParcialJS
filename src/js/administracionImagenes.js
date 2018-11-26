var arrayAvaters=JSON.parse(localStorage.getItem("avatares"));

var guardar= document.getElementById("btnGuardar");
guardar.addEventListener("click", guardarUsuario);

function guardarUsuario(){
  var punto=document.getElementById("punto");
  var genero=document.getElementById("genero");
  var foto=document.getElementById("foto");
  var id=arrayAvaters.length+1;
 var obj= new Avatar();
 obj.puntos=punto.value;
 obj.genero=genero.value;
 obj.nombre=foto.value;
 obj.id=id;
 arrayAvaters.push(obj);
localStorage.setItem("avatares",JSON.stringify(arrayAvaters));

var newArray=JSON.parse(localStorage.getItem("avatares"));

console.log(newArray.length);
for (var elemento in newArray) {
      console.log(newArray[elemento]);
}
}
