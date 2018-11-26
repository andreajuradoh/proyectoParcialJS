class Juego {
  constructor() {


  }
   getRand(max,min){
    return Math.floor(Math.random() * (max - min));
  }
  getTablero(nivel){

    var imagenese=JSON.parse(localStorage.getItem("imagenes"));
    var imgSeleccionadas=[];
    let cont=0;

    while(cont<nivel){
      let random=this.getRand(2,0);
      for (var i = 0; i < imagenese.length; i++) {
        if(random==i){
          imgSeleccionadas.push(imagenese[i]);
          imgSeleccionadas.push(imagenese[i]);
          imagenese.splice(i, 1);
          break;
        }

      }
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
    for (var i = 0; i < array.length; i++) {
      if(random==i){
        posicionArray.push(array[i]);
        array.splice(i, 1);
        break;
      }
    }
    cont++;
    }
    return posicionArray;
  }
}
