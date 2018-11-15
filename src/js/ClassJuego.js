class Juego {
  constructor() {


  }
   getRand(max,min){
    return Math.floor(Math.random() * (max - min));
  }
  getTablero(nivel){

    var imagenese=JSON.parse(imagenes);
    var imgSeleccionadas=[];
    let cont=0;
    while(cont<nivel){
      let random=this.getRand(4,0);
      for (var i = 0; i < imagenese.length; i++) {
        if(random==i){
          imgSeleccionadas.push(imagenese[i]);
          imagenese.splice(i, 1);
          break;
        }

      }
      cont++;
    }
    return imgSeleccionadas;
  }
  ubicarElementos(nivel, array){
    
  }
}
