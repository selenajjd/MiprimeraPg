//alert ("hola esta es mi JS");

let nombre0 = "Selena";

var nombre1 = "Sele";

const nombre2 = "Seli";


console.log (nombre0); 
console.log (nombre1); 
console.log (nombre2); 
/*
//SELECIONAR ELEMENTOS
let contenidoTitulo = "Mombre" ;

let titulo = document.querySelector(" .titulo");
titulo.innerHTML = contenidoTitulo

// CONDICIONALES  (V o F)si se sumplen o no se cumplen 

let textTitulo = titulo.innerText;
console.log(textTitulo); // que muestre el nombre en la consola


if (contenidoTitulo == "Nombre"){
    titulo.innerHTML = "otro";

} else {
    console.log = ("nose cumple");
}
*/

// FUNCIONES
let cuidad = "Lima";
let pais = "Perú";
let gusto = "viajar";

let parrafo = document.querySelector(".parrafo2")

function cambiarTexto (nombre0 , cuidad , gusto, pais) {
    let contenido = `Me llamo ${nombre0}, nací en ${pais} y vivo
     en ${cuidad}. Me gusta ${gusto} y salir a pasear en días 
     de sol. Me encantaría aprender a programar para poder ayudar a
      las personas a mostrar lo que hacen.`;

      return contenido;
}

parrafo.innerHTML= cambiarTexto (nombre0, cuidad, gusto, pais) ; 





const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");
// validar los nombres
function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});
