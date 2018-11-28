
//accion.addEventListener("click", colocarAvatar);

var conten=document.getElementById("contenAvatares");
var datos=JSON.parse(localStorage.getItem("avatares"));
var mostra="";
  var tblBody = document.createElement("tbody");
    var hilera = document.createElement("tr");
for (var img in datos) {
  var celda = document.createElement("td");
  var puntos= document.createElement("h4");
  puntos.textContent=datos[img].puntos+" puntos";
  var imagenAvatar = document.createElement("img");
 celda.id="tabla";
  celda.className='personal';
  imagenAvatar.src='../img/'+datos[img].nombre+'';
  imagenAvatar.setAttribute("onclick","sesion("+img+")");
  imagenAvatar.className='rounded-circle  img-responsive';
  var link = document.createElement("a");
  link.href='instrucciones.html';
  //conten.innerHTML+="<td onclick='sesion("+datos[img]+")' id='tabla'><a  href='instrucciones.html?"+datos[img].nombre+"'  id='"+datos[img].id+"'><img class='rounded-circle' id='imgen' src='../img/"+datos[img].nombre+"''></a></td>";
celda.appendChild(puntos);
celda.appendChild(link);

link.appendChild(imagenAvatar);
hilera.appendChild(celda);

//console.log(datos[img]);
}
tblBody.appendChild(hilera);
conten.appendChild(tblBody);

function sesion(indice){
  var avatar
avatar= datos[indice];

//  localStorage.clear();
  localStorage.setItem("sesion",JSON.stringify(avatar));

}

var descargar=document.getElementById("export-button");
descargar.addEventListener('click', exportJSON);

function exportJSON() {
    //var IEwindow = window.open();
    //IEwindow.document.write('sep=,\r\n' + JSON.stringify(objJSON));
    //IEwindow.document.close();
    //IEwindow.document.execCommand('SaveAs', true, "datos.json");
    //IEwindow.close();

    let dataStr = JSON.stringify(datos);
    let dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

    let exportFileDefaultName = '../avatares.json';

    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}
