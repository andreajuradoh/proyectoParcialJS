
cadVariables = location.search.substring(1,location.search.length);
var obj= new Juego();
var tablero=[];
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

      //imagenCelda.src="../img/"+ubicad[mostra].nombre;
      celda.setAttribute("onclick","mostrarImagen("+mostra+")");

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
function mostrarImagen(mostra,ubicad){
for (var i = 0; i < tablero.length; i++) {
  console.log("elemontos"+tablero[i]);
  alert(tablero[i].nombre);
}

}
