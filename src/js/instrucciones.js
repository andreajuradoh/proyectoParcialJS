

cadVariables=JSON.parse(localStorage.getItem("sesion"));
colocarAvatar(cadVariables);

function colocarAvatar(nombre){
  let img = document.getElementById("conten-avat");
  //var nombre="avatar1.png";
  img.innerHTML="<img class='rounded-circle personal img-responsive' src='../img/"+nombre.nombre+"'>";
}


var botonson=document.getElementById("sonido");


    function sonidoCerdo() {
      let audioclick = document.getElementById("audioclick");
      audioclick.play();
      var niveles=document.getElementById("padreniveles");
      niveles.style.display="flex";
        var video=document.getElementById("video");
    
     }

botonson.addEventListener('click', sonidoCerdo);
