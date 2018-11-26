
//accion.addEventListener("click", colocarAvatar);

var conten=document.getElementById("contenAvatares");
var datos=JSON.parse(localStorage.getItem("avatares"));
var mostra="";
for (var img in datos) {
  var celda = document.createElement("td");
  var puntos= document.createElement("h4");
  puntos.textContent=datos[img].puntos;
  var imagenAvatar = document.createElement("img");
  celda.className='personal'
  imagenAvatar.src='../img/'+datos[img].nombre+'';
  imagenAvatar.setAttribute("onclick","sesion("+img+")");
  imagenAvatar.className='rounded-circle personal'
  var link = document.createElement("a");
  link.href='instrucciones.html';
  //conten.innerHTML+="<td onclick='sesion("+datos[img]+")' id='tabla'><a  href='instrucciones.html?"+datos[img].nombre+"'  id='"+datos[img].id+"'><img class='rounded-circle' id='imgen' src='../img/"+datos[img].nombre+"''></a></td>";
celda.appendChild(puntos);
celda.appendChild(link);

link.appendChild(imagenAvatar);
conten.appendChild(celda);
//console.log(datos[img]);
}


function sesion(indice){
  var avatar
avatar= datos[indice];

//  localStorage.clear();
  localStorage.setItem("sesion",JSON.stringify(avatar));

}
