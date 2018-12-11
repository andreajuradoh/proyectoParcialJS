 var background =document.getElementById("musicBackground");


        jQuery("body").trigger("click");
        $(document).ready(function(){
          $("body").click(function (){
            background.volume=0.3;
            background.play();
          });
        });

cadVariables=JSON.parse(localStorage.getItem("sesion"));
colocarAvatar(cadVariables);

function colocarAvatar(avatar){
  let img = document.getElementById("conten-avat");
  //var nombre="avatar1.png";
  if(avatar.nombre.substring(0,4)=="data"){

  img.innerHTML="<img class=' img-responsive' src='"+avatar.nombre+"'>";
  img.className="personalImg";
  }else
  img.innerHTML="<img class=' img-responsive' src='../img/"+avatar.nombre+"'>";
}


var botonson= document.getElementById("sonido");
var recargarButton = document.getElementById("recargar");


    function sonidoCerdo() {
      let audioclick = document.getElementById("audioclick");
      audioclick.play();
      botonson.style.display="none";
       let escogeNivel = document.getElementById("escogeNivel");
        escogeNivel.volume=1;
      escogeNivel.play();
      var niveles=document.getElementById("padreniveles");
      niveles.style.display="flex";
        var video=document.getElementById("video");

     }

function recargarInstruccion() {
      let escogeNivel = document.getElementById("escogeNivel");
        escogeNivel.volume=1;
      escogeNivel.play();
}

recargarButton.addEventListener('click',recargarInstruccion);
