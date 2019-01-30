try {
  document.addEventListener('DOMContentLoaded',function(){
     document.querySelector('#fotoadd').onchange=evento;
       },false);
 function mostrar(){
     let foto = $("#imagenadd").attr("src");
    // console.log(foto);
     $('#fotoadd').attr('value',foto);

 }

       function evento(event){
         readURL(this, "fotoadd");
       }
       $("#imagen").change(function(){
     readURL(this, "fotoadd");
           // mostrar();
      });
       function readURL(input, id) {

           if (input.files && input.files[0]) {
             console.log(input.files);
               var reader = new FileReader();
                 console.log("Hola");
               reader.onload = function (e) {
                   console.log(e.target.result);

                   $('#'+id).attr('value', e.target.result);
                   let img= document.getElementById("imagenadd");
                   img.src=e.target.result;
                  //  $("#imagenadd").attr("src");
                    //$('#fotoadd').attr('value',e.target.result);

               }

               reader.readAsDataURL(input.files[0]);
           }

       }

} catch (e) {

}
