const txtnombres = document.getElementById("txtnombres");
const txtapellidos = document.getElementById("txtapellidos");
const txtemail = document.getElementById("txtemail");
const btnenviar = document.getElementById("btnenviar");
const mensaje = document.getElementById("mensaje");
const txtarea = document.getElementById("txtarea");

btnenviar.onclick = function(){
   let emailv = txtemail.value;
   let indice = emailv.indexOf("@");
   let email = txtemail.value.length;
    let nombre = txtnombres.value.length;
    let apellidos = txtapellidos.value.length;
    let area = txtarea.value.length;
   
    if(indice == -1)  {
        mensaje.innerText="Ingresa un correo valido";
   }
   else{
    mensaje.innerText="";
   } 

   if(( nombre === 0) || ( apellidos === 0) || ( area === 0)) {
        alert("Llena todos los espacios")
   }

}
