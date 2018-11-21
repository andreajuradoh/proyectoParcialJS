
//accion.addEventListener("click", colocarAvatar);

var conten=document.getElementById("contenAvatares");
var datos=JSON.parse(imagenes);
var mostra="";
for (var img in datos) {
  var celda = document.createElement("td");
  var imagenAvatar = document.createElement("img");
  imagenAvatar.src='../img/'+datos[img].nombre+'';
  imagenAvatar.setAttribute("onclick","sesion("+img+")");
  imagenAvatar.className='rounded-circle'
  var link = document.createElement("a");
  link.href='instrucciones.html?'+datos[img].nombre+'';
  //conten.innerHTML+="<td onclick='sesion("+datos[img]+")' id='tabla'><a  href='instrucciones.html?"+datos[img].nombre+"'  id='"+datos[img].id+"'><img class='rounded-circle' id='imgen' src='../img/"+datos[img].nombre+"''></a></td>";
celda.appendChild(link);
link.appendChild(imagenAvatar);
conten.appendChild(celda);
//console.log(datos[img]);
}


function sesion(indice){
  var avatar
avatar= datos[indice];

  localStorage.clear();
  localStorage.setItem("avatar",JSON.stringify(avatar));
  console.log(avatar.nombre);
  avatar=JSON.parse(localStorage.getItem("avatar"));
  console.log(avatar.nombre);
}
