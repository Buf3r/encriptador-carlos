var copiar = document.querySelector("copiar");
const introducir=document.getElementById("introducir")
const mostrar = document.querySelector(".textarea-mensaje");


// var a=prompt("que frase quieres cambiar a la letra.. `a` ");


// var dato=prompt("que texto quieres cambiar");

 

//funcion
// var dato=prompt("que texto quieres cambiar");




function press(){
   var cambio=introducir.value.replace("a","owa")

var cambio=cambio.replace("i","owi")
var cambio=cambio.replace("e","owe")
var cambio=cambio.replace("o","owo")
var cambio=cambio.replace("u","uwu")

   //hasta aqui funciona bien
   mostrar.value= cambio;

   mostrar.style.backgroundImage="none";
   
    return mostrar;

   // return alert(cambio);
}

function enviar(){
   var cambio=introducir.value.replace("owa","a")

   var cambio=cambio.replace("owi","i")
   var cambio=cambio.replace("owe","e")
   var cambio=cambio.replace("owo","o")
   var cambio=cambio.replace("uwu","u")
   
      //hasta aqui funciona bien
      mostrar.value= cambio;
      
       return mostrar;
   
}

function copiado(){
   mostrar;
   swal("¡Bien!", "Has hecho clic en el botón :)", "success");
   
}

