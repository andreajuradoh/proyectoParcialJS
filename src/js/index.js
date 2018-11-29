
var sonido_bg =document.getElementById('background-music');
sonido_bg.volumen = 0.5;
sonido_bg.play();

var escogePersonaje =document.getElementById('elige-personaje');
escogePersonaje.volume =1;
escogePersonaje.play();

//accion.addEventListener("click", colocarAvatar);

var conten=document.getElementById("contenAvatares");
var datos=JSON.parse(localStorage.getItem("avatares"));
var mostra="";
  
for (var img in datos) {
  var celda = document.createElement("div");
  var puntos= document.createElement("h4");
  puntos.textContent=datos[img].puntos+" puntos";
  var imagenAvatar = document.createElement("img");

  imagenAvatar.src='../img/'+datos[img].nombre+'';
  imagenAvatar.setAttribute("onclick","sesion("+img+")");
  var link = document.createElement("a");
  link.href='instrucciones.html';
  
celda.appendChild(puntos);
celda.appendChild(link);

link.appendChild(imagenAvatar);
conten.appendChild(celda); //agrega los avatares

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
