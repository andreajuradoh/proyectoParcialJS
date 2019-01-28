class Juego {
  constructor(id_usuario) {
   this.id_usuario=id_usuario;
   this.puntaje=0;

  }
  guardarPartida(juego){
    var req = new XMLHttpRequest();
  // Petición HTTP GET síncrona hacia el archivo fotos.json del servidor
  req.open("GET", "window.location//guardarPartida"+juego.id_usuario+juego.puntaje, false);
  req.send(null);
  }
   getRand(max,min){
    return Math.floor(Math.random() * (max - min));
  }
  getTablero(nivel){

    //var imagenese=JSON.parse(localStorage.getItem("imagenes"));
    var req = new XMLHttpRequest();
  // Petición HTTP GET síncrona hacia el archivo fotos.json del servidor
  req.open("GET", "window.location/consultImagenes", false);
  req.send(null);
  var imagenese= JSON.parse(req.responseText);

    var imgSeleccionadas=[];
    let cont=0;
    let max=imagenese.imagenes.length-1;
    while(cont<nivel){
      let random=this.getRand(max,0);


          imgSeleccionadas.push(imagenese.imagenes[random]);
          imgSeleccionadas.push(imagenese.imagenes[random]);
          imagenese.imagenes.splice(random, 1);
           max--;
      cont++;
    }
    return imgSeleccionadas;
  }
  ubicarElementos(array){
let random=0;
var posicionArray=[];
var tope=array.length;
let cont=0;
while(cont<tope){
var tamaño=array.length-1;
random=this.getRand(tamaño,0);


        posicionArray.push(array[random]);
        array.splice(random, 1);

    cont++;
    }
    return posicionArray;
  }
}
