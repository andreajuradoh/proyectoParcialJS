
cadVariables = location.search.substring(1,location.search.length);
var obj= new Juego();
var tablero=[];
var imagenVolteada=[];// array que guarda todos los tags de imagenes que hay en la tabla
// se la utiliza para guardar y setearles el atributo src que contendra la imagen real
var imgTmp=[];// array que guarda todos los objetos imagenes que han ido seleccionando
// se lo utiliza para verificar si la imagen seleccionada anteriormente es igual a la seleccionada actualmente
var contadorVeces=0; // variable que cuenta la cantidad de clicks que han habido
var posicionTmp=[];// array para guardar las posiciones de los elementos seleccionados
var imgTagTmp=[];// array utilizado para guardar el tag de las imagenes que han sido volteados temporalmente
// Se lo utiliza para consultar si el click es de la misma imagen o de otra imagen
var imagenesViradasConExito=0; // contador de  imagenes que ya han sido volteadas exitosamente
// Se lo va a utilizar para considerar si el jugador ya completó el juego
genera_tabla(cadVariables);
function genera_tabla(nivel) {
  // Obtener la referencia del elemento body
  var body = document.getElementsByTagName("body")[0];

  var tabla   = document.createElement("table");
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
      imagenCelda.src="../img/fondo.jpg";
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
  // appends <table> into <body>
  body.appendChild(tabla);
  // modifica el atributo "border" de la tabla y lo fija a "2";
  tabla.setAttribute("border", "2");
}
function mostrarImagen(mostra){
 imgTmp.push(tablero[mostra]);
 imagenVolteada[mostra].src="../img/"+tablero[mostra].nombre;

imgTagTmp.push(imagenVolteada[mostra]);
 posicionTmp.push(mostra);

 contadorVeces++;

 if(contadorVeces>=3){
   if(imgTagTmp[0]!=imagenVolteada[mostra]){
     imgTagTmp=[];

   contadorVeces=1;
   if(imgTmp[imgTmp.length-3].id!=imgTmp[imgTmp.length-2].id){
    let tmp=posicionTmp.pop();
    let saco=posicionTmp.pop();

    imagenVolteada[saco].src="../img/fondo.jpg";
    saco=posicionTmp.pop();
    imagenVolteada[saco].src="../img/fondo.jpg";
    posicionTmp.push(tmp);

    imgTmp=[];
    imgTmp.push(tablero[tmp]);

  }else{
       //imagenVolteada[posicionTmp[0]].onclick="";
       //imagenVolteada[mostra].onclick="";
       imagenesViradasConExito+=2;
  }
 }
 }
 if(imagenesViradasConExito==tablero.length){
   alert("Juego ganado");

 }

}
