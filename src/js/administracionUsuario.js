var arrayAvaters=JSON.parse(localStorage.getItem("avatares"));

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
  var tdPunto= document.createElement("td");
  tdPunto.innerHTML="Puntos";
  var tdGenero= document.createElement("td");
  tdGenero.innerHTML="Genero";

  filaTitulo.appendChild(tdId);
  filaTitulo.appendChild(tdNombre);
  filaTitulo.appendChild(tdPunto);
  filaTitulo.appendChild(tdGenero);

  tblBody.appendChild(filaTitulo);
  for (var variable in arrayAvaters) {
    var hilera= document.createElement("tr");
    var celdaId= document.createElement("td");
    celdaId.innerHTML=arrayAvaters[variable].id;
    var celdaNombre= document.createElement("td");
    celdaNombre.innerHTML=arrayAvaters[variable].nombre;

    var celdaPunto= document.createElement("td");
    celdaPunto.innerHTML=arrayAvaters[variable].puntos;
    var celdaGenero= document.createElement("td");
    celdaGenero.innerHTML=arrayAvaters[variable].genero;



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
    hilera.appendChild(celdaPunto);
    hilera.appendChild(celdaGenero);
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
  var punto=document.getElementById("punto");
  var genero=document.getElementById("genero");
  var foto=document.getElementById("foto");
  var id=arrayAvaters.length+1;
 var obj= new Avatar();
 var pts=parseInt(punto.value,10);
 obj.puntos=pts;
 obj.genero=genero.value;
 obj.nombre=foto.value;
 obj.id=id;
 arrayAvaters.push(obj);
localStorage.setItem("avatares",JSON.stringify(arrayAvaters));
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

  localStorage.setItem("avatares",JSON.stringify(arrayAvaters));
  listarUsuario();
}

function editar(id){
  let div=document.getElementById("editar");
  div.style.display="block";
  var punto=document.getElementById("puntoedit");
  var genero=document.getElementById("generoedit");
  var foto=document.getElementById("fotoedit");
  var idCampo=document.getElementById("idedit");
let guardar=document.getElementById("btnEditar");

  let indice=0;
    for (var variable in arrayAvaters) {

      if (arrayAvaters[variable].id==id) {
      punto.value=arrayAvaters[variable].puntos;
      idCampo.textContent=arrayAvaters[variable].id;
      let option= document.createElement("option");
      option.selected="true";
      option.value=arrayAvaters[variable].nombre;
      option.textContent=arrayAvaters[variable].nombre;
      foto.appendChild(option);
     let optiongenereo=document.createElement("option");
     optiongenereo.selected="true";
     optiongenereo.value=arrayAvaters[variable].genero;
     optiongenereo.textContent=arrayAvaters[variable].genero;
     genero.appendChild(optiongenereo);

        break;
      }
     indice++;
    }


   guardar.setAttribute("onclick","update("+id+")");


}
function update(id){
  var objEditar= new Avatar();
  var punto=document.getElementById("puntoedit");
  var genero=document.getElementById("generoedit");
  var foto=document.getElementById("fotoedit");
var pts=parseInt(punto.value,10);
  objEditar.puntos=pts;
  objEditar.genero=genero.value;
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
  localStorage.setItem("avatares",JSON.stringify(arrayAvaters));
  let div=document.getElementById("editar");
  div.style.display="none";
  listarUsuario();
}
