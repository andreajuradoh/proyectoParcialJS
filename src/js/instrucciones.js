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
      botonson.style.display="none";
       let escogeNivel = document.getElementById("escogeNivel");
        escogeNivel.volume=1;
      escogeNivel.play();
      var niveles=document.getElementById("padreniveles");
      niveles.style.display="flex";
        var video=document.getElementById("video");
setTimeout(myMoveNivel1, 500);
setTimeout(myMoveNivel2, 5000);
setTimeout(myMoveNivel3, 10000);
     }

     function myMoveNivel1() {
       var elem = document.getElementById("nivel1");
       var pos = 350;
       var id = setInterval(frame, 5);
       function frame() {
         if (pos == 0) {
           clearInterval(id);
         } else {
           pos--;
           elem.style.top = pos +'px';
           elem.style.top = pos + 'px';
         }
       }
     }
     function myMoveNivel2() {
       var elem = document.getElementById("nivel2");
       var pos = 350;
       var id = setInterval(frame, 5);
       function frame() {
         if (pos == 0) {
           clearInterval(id);
         } else {
           pos--;
           elem.style.top = pos +'px';
           elem.style.top = pos + 'px';
         }
       }
     }

     function myMoveNivel3() {
       var elem = document.getElementById("nivel3");
       var pos = 350;
       var id = setInterval(frame, 5);
       function frame() {
         if (pos == 0) {
           clearInterval(id);
         } else {
           pos--;
           elem.style.top = pos +'px';
           elem.style.top = pos + 'px';
         }
       }
     }
botonson.addEventListener('click', sonidoCerdo);
