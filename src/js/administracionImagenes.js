var arrayAvaters=JSON.parse(localStorage.getItem("imagenes"));

var guardar= document.getElementById("btnGuardar");
guardar.addEventListener("click", guardarUsuario);

var nuevo= document.getElementById("btnNuevo");
nuevo.addEventListener("click", nuevoUsuario);
listarUsuario();

function listarUsuario(){
  var div=document.getElementById("listar");
div.innerHTML="";
  var tabla   = document.createElement("table");
  var tblBody = document.createElement("tbody");
  var filaTitulo= document.createElement("tr");
  var tdId= document.createElement("td");
  tdId.innerHTML="Id";
  var tdNombre= document.createElement("td");
  tdNombre.innerHTML="Nombre";


  filaTitulo.appendChild(tdId);
  filaTitulo.appendChild(tdNombre);


  tblBody.appendChild(filaTitulo);
  for (var variable in arrayAvaters) {
    var hilera= document.createElement("tr");
    var celdaId= document.createElement("td");
    celdaId.innerHTML=arrayAvaters[variable].id;
    var celdaNombre= document.createElement("td");
    celdaNombre.innerHTML=arrayAvaters[variable].nombre;


   var celdaEditar= document.createElement("td");
     var editar=document.createElement("a");
     editar.textContent="Editar";
      editar.href="#";
      editar.setAttribute("onclick","editar("+arrayAvaters[variable].id+")");
  celdaEditar.appendChild(editar);

  var celdaEliminar=document.createElement("td");
  var eliminar= document.createElement("a");
  eliminar.setAttribute("onclick","eliminar("+arrayAvaters[variable].id+")");
   eliminar.textContent="Eliminar";
   eliminar.href="#";
  celdaEliminar.appendChild(eliminar);

    hilera.appendChild(celdaId);
    hilera.appendChild(celdaNombre);

    hilera.appendChild(celdaEditar);
    hilera.appendChild(celdaEliminar);
    tblBody.appendChild(hilera);
  }

  tabla.appendChild(tblBody);
  div.appendChild(tabla);
}

function nuevoUsuario(){
  let div=document.getElementById("nuevo");
  div.style.display="block";
}

function guardarUsuario(){

  var foto=document.getElementById("imagen");
  var id=arrayAvaters.length+1;
 var obj= new Imagenes();


 obj.nombre=foto.value;
 obj.id=id;
 arrayAvaters.push(obj);
localStorage.setItem("imagenes",JSON.stringify(arrayAvaters));
let div=document.getElementById("nuevo");
div.style.display="none";
listarUsuario();
}


function eliminar(id){
let indice=0;
  for (var variable in arrayAvaters) {

    if (arrayAvaters[variable].id==id) {
      arrayAvaters.splice(indice,1);
      break;
    }
   indice++;
  }

  localStorage.setItem("imagenes",JSON.stringify(arrayAvaters));
  listarUsuario();
}

function editar(id){
  let div=document.getElementById("editar");
  div.style.display="block";

  var foto=document.getElementById("imagenedit");
  var idCampo=document.getElementById("idedit");
let guardar=document.getElementById("btnEditar");

  let indice=0;
    for (var variable in arrayAvaters) {

      if (arrayAvaters[variable].id==id) {
      foto.value=arrayAvaters[variable].nombre;
      idCampo.textContent=arrayAvaters[variable].id;
        break;
      }
     indice++;
    }


   guardar.setAttribute("onclick","update("+id+")");


}
function update(id){
  var objEditar= new Imagenes();

  var foto=document.getElementById("imagenedit");

  objEditar.nombre=foto.value;
   objEditar.id=id;
  let indice=0;
    for (var variable in arrayAvaters) {

      if (arrayAvaters[variable].id==id) {
        arrayAvaters.splice(indice,1);
        break;
      }
     indice++;
    }
  arrayAvaters.push(objEditar);
  localStorage.setItem("imagenes",JSON.stringify(arrayAvaters));
  let div=document.getElementById("editar");
  div.style.display="none";
  listarUsuario();
}
