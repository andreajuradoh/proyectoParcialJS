
cadVariables = location.search.substring(1,location.search.length);

genera_tabla(cadVariables);
function genera_tabla(nivel) {
  // Obtener la referencia del elemento body
  var body = document.getElementsByTagName("body")[0];

  var tabla   = document.createElement("table");
  var tblBody = document.createElement("tbody");
var largo, ancho;

  switch(nivel) {
      case "1":
      largo=2;
      ancho=2;

          break;
      case "2":
      largo= 4;
      ancho= 2;
          break;
      default:
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
      imagenCelda.src="../img/fondo.jpg";
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
