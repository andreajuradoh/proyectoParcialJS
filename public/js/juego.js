
//cadVariables = location.search.substring(1,location.search.length);


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
audiofondo.preload = "auto";
//var nivelMain=parseInt(cadVariables,10);

var h1nivel=document.getElementById("hnivel");
var nivelMain=h1nivel.textContent.substring(7,8);
console.log(nivelMain);
var nivelMain=parseInt(nivelMain,10);

var avatar=JSON.parse(localStorage.getItem("sesion"));
var obj= new Juego(avatar.id);
var fondo="";
if(avatar.genero=="m"){
  fondo="../img/questionniño.gif";

}else {
  fondo="../img/questionrosa.gif";
}
actualizarPts();

function actualizarPts(){
    var pt = $('#ptos');

    var ptos=avatar.puntos;
    if(ptos<0   ){
      ptos=0;
      avatar.puntos=0;

    }
    if (obj.puntaje<0) {
      obj.puntaje=0;
    }
    let img=document.getElementById("imgAvatar");
    img.className="imagenavatar";

    if(avatar.foto.substring(0,4)=="data"){
      img.src=avatar.foto;
    }else
    img.src="../img/"+avatar.foto;
    puntos=document.getElementById("puntosdurante");
    puntos.textContent=" ";
    puntos.textContent="Puntos del jugador "+ptos;
    let puntsPar=document.getElementById("puntosdurantePartida");
    puntsPar.textContent=" ";
    puntsPar.textContent="Puntos de la partida "+obj.puntaje;
       pt.prepend(puntos);
       pt.prepend(puntsPar);

}
genera_tabla(nivelMain);


//crearModalVictoria(avatar);

function genera_tabla(nivel) {
  // Obtener la referencia del elemento body



  var body = document.getElementsByTagName("body")[0];
  var div=document.getElementById("tabla-main");

  var tabla   = document.createElement("div");
    tabla.className= "mi-tablas";
  var tblBody = document.createElement("div");
   var largo, ancho, mostra=0;
var ubicad=[];
  switch(nivel) {
      case 1:
    imgse=obj.getTablero(2);

    tablero=obj.ubicarElementos(imgse);


      largo=2;
      ancho=2;


          break;
      case 2:
        imgse=obj.getTablero(3);
        tablero=obj.ubicarElementos(imgse);
      largo= 2;
      ancho= 3;
          break;
          case 3:
          imgse=obj.getTablero(4);
          tablero=obj.ubicarElementos(imgse);
         largo= 2;
         ancho= 4;
              break;
      default:
      return;
  }

  for (var i = 0; i < largo; i++) {

    // Crea las hileras de la tabla
    var hilera = document.createElement("div");
      hilera.className="fila";



    for (var j = 0; j < ancho; j++) {
      // Crea un elemento <td> y un nodo de texto, haz que el nodo de
      // texto sea el contenido de <td>, ubica el elemento <td> al final
      // de la hilera de la tabla
      var celda = document.createElement("div");
      celda.className="micelda hidden";

      var imagenCelda = document.createElement("img");
      imagenCelda.className="img";
        imagenCelda.className="img-responsive";
      imagenVolteada.push(imagenCelda);

      imagenCelda.src=fondo;

      imagenCelda.setAttribute("onclick","mostrarImagen("+mostra+")");
//setInterval(myTimer, 1000);

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
let audioclick = document.getElementById("audioclick");
audioclick.preload = "auto";
    audiofondo.volume = 0.1;
    audiofondo.play();
audioclick.play();

if(compara==fondo){

 imgTmp.push(tablero[mostra]);
 if(tablero[mostra].foto.substring(0,4)=="data"){
   imagenVolteada[mostra].src=tablero[mostra].foto;

 }else
 imagenVolteada[mostra].src="../img/"+tablero[mostra].foto;

imagenesViradasConExito++;
 posicionTmp.push(mostra);

 contadorVeces++;

 if(contadorVeces>=3){
   contadorVeces=1;
   if(imgTmp[imgTmp.length-3].id!=imgTmp[imgTmp.length-2].id){
    let tmp=posicionTmp.pop();//eliminoultimap pos
    let saco=posicionTmp.pop();//elimino 2da pos
     imagenesViradasConExito-=2;
     var respuestaIncorrecta = document.getElementById("respuesta-incorrecta");
    respuestaIncorrecta.play();
    imagenVolteada[saco].src=fondo;
    saco=posicionTmp.pop();
    imagenVolteada[saco].src=fondo;
    posicionTmp.push(tmp);

    imgTmp=[];
    imgTmp.push(tablero[tmp]);
    avatar.puntos-=1*nivelMain;
    obj.puntaje-=1*nivelMain;
     actualizarPts();
  }else{
      avatar.puntos+=tablero[mostra].puntaje;
      obj.puntaje+=tablero[mostra].puntaje;
      actualizarPts();
  }
 }
 }
 if(imagenesViradasConExito==tablero.length){
   var audio = document.getElementById("audio");
   audio.preload = "auto";
   var audioCorrecto =  document.getElementById("correcto");
    audioCorrecto.preload = "auto";
    avatar.puntos+=10*nivelMain;
    obj.puntaje+=10*nivelMain;
     actualizarPts();
   nivelMain++;

if(nivelMain<=3){
setTimeout(juegonuevo, 500);
    audioCorrecto.play();
;}
else {
   audio.play();
audiofondo.pause();
audiofondo.currentTime = 0;


    clearInterval(myVar);//esto hace que el tiempo se detenga cunando se termine el juego

   time=0;
     //clearInterval(myVar);

  crearModalVictoria(avatar);
}
 }
}
function juegonuevo(){
    //setInterval(myTimer);
    obj.actualizarPartida(obj);
    modificarPuntaje();
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
       $('#mask').hide();
  $('.window').hide();
   genera_tabla(nivelMain);

var h1nivel=document.getElementById("hnivel");
h1nivel.textContent="Nivel: " + nivelMain;

}
function overJuego(nivel) {
  myVar= setInterval(myTimer, 1000);
  juegonuevo(nivel);

}
function crearModalVictoria(avatar){


        //select all the a tag with name equal to modal

                //Cancel the link behavior

                //Get the A tag
                var id = $('#dialog');


                if(avatar.foto.substring(0,4)=="data"){
                img="<img class=' eleModel' src='"+avatar.foto+"'>";
                }else
                img="<img class='eleModel' src='../img/"+avatar.foto+"'>";
                var ptos=avatar.puntos;
              let  puntos="<div style='float:left'><span >puntos de la partida "+obj.puntaje+"</span></div>";
                let puntosAvatar="<div><span >puntos acumulados del jugador "+ptos+"</span></div>";

                localStorage.setItem("sesion",JSON.stringify(avatar));
                modificarPuntaje();
                obj.actualizarPartida(obj);
              var buton= document.createElement("img");
              buton.src="../img/botoonnuevojuego.png";
              nivelMain=1;
                buton.setAttribute("onclick","overJuego(nivelMain)");

                var salir= document.createElement("img");
              salir.src="../img/salir.png";

             var linsalir= document.createElement("a");
             linsalir.href="/escoger";
             linsalir.appendChild(salir);


            salir.className= "salir-icon";
                let  globorojo=document.createElement("img");
                 globorojo.id="animate";
              globorojo.src="../img/pirotecnia2.gif"

       let  globoamarillo=document.createElement("img");
                 globoamarillo.id="animate";
              globoamarillo.src="../img/piro3.gif"


               id.prepend(buton);

              id.prepend(linsalir);

              id.prepend(puntos);
              id.prepend(puntosAvatar);
               id.prepend(img);

               id.prepend( globorojo);

               myMove();
     id.prepend(globoamarillo);
    myMove2();

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




}
function modificarPuntaje(){
  //let arrayAvaters=JSON.parse(localStorage.getItem("avatares"));
  var req = new XMLHttpRequest();
// Petición HTTP GET síncrona hacia el archivo fotos.json del servidor
let obj=JSON.stringify(avatar);
const server=window.location.origin;
req.open("POST", server+"/actualizaPuntaje", false);
req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
req.send("puntos="+avatar.puntos+"&id="+avatar.id);

/*
  let obj= new Avatar();
  let indice=0;
  for (var variable in arrayAvaters) {
    if (arrayAvaters[variable].id==avatar.id) {

      obj.puntos=avatar.puntos;
      obj.foto=arrayAvaters[variable].foto;
      obj.id=arrayAvaters[variable].id;
      obj.genero=arrayAvaters[variable].genero;
        arrayAvaters.splice(indice,1);
      break
    }
    indice++;
  }
  arrayAvaters.push(obj);
 localStorage.setItem("avatares",JSON.stringify(arrayAvaters));
*/
}
var time=0;
var myVar = setInterval(myTimer, 1000);

function myTimer() {

    document.getElementById("tiempo").innerHTML = time;
    time++;
}


function myMove2() {
  var elem = document.getElementById("animate");
  var pos = 350;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 0) {
      clearInterval(id);
    } else {
      pos--;
      elem.style.right = pos +'px';
      elem.style.top = pos + 'px';
    }
  }
}




function myMove() {
  var elem = document.getElementById("animate");
  var pos = 350;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 0) {
      clearInterval(id);//detener la funcion q se esta ejecutando
    } else {
      pos--;
      elem.style.top = pos +'px';
      elem.style.top = pos + 'px';
    }
  }
}
