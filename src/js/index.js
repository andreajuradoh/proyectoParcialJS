
//accion.addEventListener("click", colocarAvatar);

var conten=document.getElementById("contenAvatares");
var datos=JSON.parse(imagenes);

for (var img in datos) {
  conten.innerHTML+="<td id='tabla'><a href='instrucciones.html?"+datos[img].nombre+"'  id='"+datos[img].id+"'><img class='rounded-circle' id='imgen' src='../img/"+datos[img].nombre+"''></a></td>";
  //var accion= document.getElementById("'"+datos[img].id+"'");
//var accion= document.getElementById("btn");
//  accion.addEventListener("click", colocarAvatar);
console.log(datos[img]);
}

 function colocarAvatar(nombre){
  let img = document.getElementById("conten-avat");
  //var nombre="avatar1.png";
  img.innerHTML="<img src='../img/"+nombre+"'>";
}
