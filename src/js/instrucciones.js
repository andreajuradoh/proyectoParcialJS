

cadVariables=JSON.parse(localStorage.getItem("avatar"));
colocarAvatar(cadVariables);

function colocarAvatar(nombre){
  let img = document.getElementById("conten-avat");
  //var nombre="avatar1.png";
  img.innerHTML="<img src='../img/"+nombre.nombre+"'>";
}
