
cadVariables = location.search.substring(1,location.search.length);
var obj= new Juego();
var tablero=[];
var imagenVolteada=[];// array que guarda todos los tags de imagenes que hay en la tabla
// se la utiliza para guardar y setearles el atributo src que contendra la imagen real
var imgTmp=[];// array que guarda todos los objetos imagenes que han ido seleccionando
// se lo utiliza para verificar si la imagen seleccionada anteriormente es igual a la seleccionada actualmente
var contadorVeces=0; // variable que cuenta la cantidad de clicks que han habido
var posicionTmp=[];// array para guardar las posiciones de los elementos seleccionados

var imagenesViradasConExito=0; // contador de  imagenes que ya han sido volteadas exitosamente
// Se lo va a utilizar para considerar si el jugador ya completó el juego
//
var audiofondo = document.getElementById("audioultra");



var avatar=JSON.parse(localStorage.getItem("avatar"));
var fondo="";
if(avatar.genero=="m"){
  fondo="../img/fondo.jpg";

}else {
  fondo="../img/fondo-f.jpg";
}
genera_tabla(cadVariables);


//crearModalVictoria(avatar);

function genera_tabla(nivel) {
  // Obtener la referencia del elemento body


  var body = document.getElementsByTagName("body")[0];
  var div=document.getElementById("tabla-main");

  var tabla   = document.createElement("table");
  tabla.className= "table";
    tabla.className+= " mi-tablas";
  var tblBody = document.createElement("tbody");
   var largo, ancho, mostra=0;
var ubicad=[];
  switch(nivel) {
      case "1":
    imgse=obj.getTablero(2);

    tablero=obj.ubicarElementos(imgse);


      largo=2;
      ancho=2;


          break;
      case "2":
        imgse=obj.getTablero(4);
        tablero=obj.ubicarElementos(imgse);
      largo= 4;
      ancho= 2;
          break;
      default:
        imgse=obj.getTablero(6);
        tablero=obj.ubicarElementos(imgse);
       largo= 4;
       ancho= 3;
  }

  for (var i = 0; i < largo; i++) {

    // Crea las hileras de la tabla
    var hilera = document.createElement("tr");

    for (var j = 0; j < ancho; j++) {
      // Crea un elemento <td> y un nodo de texto, haz que el nodo de
      // texto sea el contenido de <td>, ubica el elemento <td> al final
      // de la hilera de la tabla
      var celda = document.createElement("td");
      var imagenCelda = document.createElement("img");
      imagenVolteada.push(imagenCelda);
      imagenCelda.src=fondo;
      imagenCelda.setAttribute("onclick","mostrarImagen("+mostra+")");

      mostra++;
      celda.appendChild(imagenCelda);
      hilera.appendChild(celda);
    }

    tblBody.appendChild(hilera);
  }
  // Crea un elemento <table> y un elemento <tbody>

  // Crea las celdas


  // posiciona el <tbody> debajo del elemento <table>
  tabla.appendChild(tblBody);
  div.appendChild(tabla);
  // appends <table> into <body>
  body.appendChild(div);
  // modifica el atributo "border" de la tabla y lo fija a "2";
  tabla.setAttribute("border", "2");
}
function mostrarImagen(mostra){
  let compara=imagenVolteada[mostra].getAttribute("src");
  let fondol=fondo;
audiofondo.play();
if(compara==fondol){

 imgTmp.push(tablero[mostra]);
 imagenVolteada[mostra].src="../img/"+tablero[mostra].nombre;

imagenesViradasConExito++;
 posicionTmp.push(mostra);

 contadorVeces++;

 if(contadorVeces>=3){



   contadorVeces=1;
   if(imgTmp[imgTmp.length-3].id!=imgTmp[imgTmp.length-2].id){
    let tmp=posicionTmp.pop();
    let saco=posicionTmp.pop();
imagenesViradasConExito-=2;
    imagenVolteada[saco].src=fondo;
    saco=posicionTmp.pop();
    imagenVolteada[saco].src=fondo;
    posicionTmp.push(tmp);

    imgTmp=[];
    imgTmp.push(tablero[tmp]);

  }
 }
 }
 if(imagenesViradasConExito==tablero.length){
   var audio = document.getElementById("audio");

   audio.play();
audiofondo.pause();
audiofondo.currentTime = 0;
   avatar.puntos+=1;
  crearModalVictoria(avatar);

 }
}
function juegonuevo(nivel){
   tablero=[];
   imagenVolteada=[];// array que guarda todos los tags de imagenes que hay en la tabla
  // se la utiliza para guardar y setearles el atributo src que contendra la imagen real
 imgTmp=[];// array que guarda todos los objetos imagenes que han ido seleccionando
  // se lo utiliza para verificar si la imagen seleccionada anteriormente es igual a la seleccionada actualmente
   contadorVeces=0; // variable que cuenta la cantidad de clicks que han habido
  posicionTmp=[];// array para guardar las posiciones de los elementos seleccionados

   imagenesViradasConExito=0;
   tabla=document.getElementById("tabla-main");
   tabla.innerHTML="";
   dialog=document.getElementById("dialog");
   dialog.innerHTML="";

genera_tabla(nivel);

}

function crearModalVictoria(avatar){


        //select all the a tag with name equal to modal

                //Cancel the link behavior

                //Get the A tag
                var id = $('#dialog');
                img="<img class='eleModel' src='../img/"+avatar.nombre+"'>";
                puntos="<span >puntos obtenidos "+avatar.puntos+"</span>";
              var buton= document.createElement("img");
              buton.src="../img/nuevojuego.jpg";
                buton.setAttribute("onclick","juegonuevo(cadVariables)");
               id.prepend(buton);
               id.prepend(img);
               id.prepend(puntos);

                //Get the screen height and width
                var maskHeight = $(document).height();
                var maskWidth = $(window).width();

                //Set height and width to mask to fill up the whole screen
                $('#mask').css({'width':maskWidth,'height':maskHeight});

                //transition effect
                $('#mask').fadeIn(1000);
                $('#mask').fadeTo("slow",0.8);

                //Get the window height and width
                var winH = $(window).height();
                var winW = $(window).width();

                //Set the popup window to center
                $(id).css('top',  winH/2-$(id).height()/2);
                $(id).css('left', winW/2-$(id).width()/2);

                //transition effect
                $(id).fadeIn(2000);



        //if close button is clicked
        $('.window .close').click(function (e) {
                //Cancel the link behavior
                e.preventDefault();
                $('#mask, .window').hide();
        });

        //if mask is clicked
        $('#mask').click(function () {
                $(this).hide();
                $('.window').hide();
        });



}
