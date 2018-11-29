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

function colocarAvatar(nombre){
  let img = document.getElementById("conten-avat");
  //var nombre="avatar1.png";
  img.innerHTML="<img class=' img-responsive' src='../img/"+nombre.nombre+"'>";
}


var botonson= document.getElementById("sonido");


    function sonidoCerdo() {
      let audioclick = document.getElementById("audioclick");
      audioclick.play();
       let escogeNivel = document.getElementById("escogeNivel");
        escogeNivel.volume=1;
      escogeNivel.play();
      var niveles=document.getElementById("padreniveles");
      niveles.style.display="flex";
        var video=document.getElementById("video");

     }

botonson.addEventListener('click', sonidoCerdo);
