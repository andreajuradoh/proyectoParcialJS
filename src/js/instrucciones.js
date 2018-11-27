

cadVariables=JSON.parse(localStorage.getItem("sesion"));
colocarAvatar(cadVariables);

function colocarAvatar(nombre){
  let img = document.getElementById("conten-avat");
  //var nombre="avatar1.png";
  img.innerHTML="<img class='rounded-circle personal img-responsive' src='../img/"+nombre.nombre+"'>";
}


var botonson=document.getElementById("sonido");


    function sonidoCerdo() {
      var sonido_cerdo = document.getElementById("videogato");
        var video=document.getElementById("video");
        video.style.display="block";
        sonido_cerdo.play();
     }

botonson.addEventListener('click', sonidoCerdo);