
cadVariables = location.search.substring(1,location.search.length);

colocarAvatar(cadVariables);
function colocarAvatar(nombre){
  let img = document.getElementById("conten-avat");
  //var nombre="avatar1.png";
  img.innerHTML="<img src='../img/"+nombre+"'>";
}
