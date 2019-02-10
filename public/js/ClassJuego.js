class Juego {
  constructor(id_usuario) {
   this.id_usuario=id_usuario;
   this.puntaje=0;

   this.id=0;
   this.guardarPartida(this);

  }
  actualizarPartida(juego){
    var req = new XMLHttpRequest();
  // Petición HTTP GET síncrona hacia el archivo fotos.json del servidor
  const server=window.location.origin;
  let id =this.id;
  let puntaje=juego.puntaje;
  req.open("POST", server+"/actualizarPartida", false);
  req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  req.send("puntos="+puntaje+"&id="+id);
  }
  guardarPartida(juego){
    var req = new XMLHttpRequest();
  // Petición HTTP GET síncrona hacia el archivo fotos.json del servidor
  const server=window.location.origin;
  req.open("POST", server+"/guardarPartida", false);
  req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  req.send("puntos="+juego.puntaje+"&id="+juego.id_usuario);
  let id=JSON.parse(req.responseText);
  this.id=parseInt(id,10);

  //return req.responseText;
  }
   getRand(max,min){
    return Math.floor(Math.random() * (max - min));
  }
  getTablero(nivel){

    //var imagenese=JSON.parse(localStorage.getItem("imagenes"));
    var req = new XMLHttpRequest();
  // Petición HTTP GET síncrona hacia el archivo fotos.json del servidor
  const server=window.location.origin;
  req.open("GET", server+"/consultImagenes", false);
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
