// alert("Hola es es mi Javascript")
// let nombre = "David"
// nombre = "Alberto"
// var nombre1 = "David"

// const nombre2 ="David"

// console.log (nombre1)
// console.log (nombre2)
// console.log (nombre)

// // SELECCIONAR ELEMENTOS 

// let contenidoTitulo = "PROXIMAMENTE";
// console.log(contenidoTitulo);

// let titulo = document.querySelector(".titulo-segmento1");
// titulo.innerHTML = contenidoTitulo;

// // // CONDICIONALES
// let titulo = document.querySelector(".titulo-segmento1");
// let textoTitulo = titulo.innerText;

// if (textoTitulo == "PROXIMAMENTE") {
//     titulo.innerHTML = "NOVEDADES";
// } else (
//     console.log("No se cumple")
// )

// //FUNCIONES

// let nombre = "Encuentra";
// let articulo = "Perfumes";

// let parrafo =document.querySelector(".segmento-seccion1 P");

// // function nombredelafuncion(){}

// function cambiarTexto(nombre, articulo) {
//     let contenido = `${nombre} los nuevos ${articulo}`;

//     return contenido;
// }

// parrafo.innerText = cambiarTexto(nombre, articulo)

//NAVBAR DESPLEGABLE

let menu_responsive = document.querySelector(".checkbtn");

menu_responsive.onclick = function navbar_activator () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};

// FORMULARIO

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

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