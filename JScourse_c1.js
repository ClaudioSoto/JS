// CLASE 1

/*
Aprendizajes
------------

1=Para obtener el pedazo de html a manipular
documnet.getElementById("id")

2=Para plasmar el texto o datos directamente en el pedazo de HTML previamente seleccionado
variable.innerHTML = valor:

3=Para imprimir cosas en la consola o herramientas del programador
console.log("mensaje");

PRIMITEVE DATA TYPES
--------------------

Integers
let number = 23:

Strings
let string = "Hola";

Boolean
let bool = true;

Undefined
let name;

LET - CONST AND VAR
-------------------

=let es para variables dinamicas que pueden cambiar su valor y tipo en cualquier momento
let nombre = "claudio";
nombre = 22;

=const se utiliza para guardar variables estaticas que nunca pueden cambiar su valor, deben estar inicializadas
const PI = 3.1416

=var hace lo mismo que let, sin emabrgo, let funciona en un scope local y var crea una variable global
var nombre = "claudio";
nombre = 21;

*/

//EJEMPLO METODO
function f1(nombre) {
  //CAMBIAR DIRECTAMENTE EL ESTILO
  document.getElementById("first").style.color = "red";
  let texto = "puto";

  //GUARDAR EL OBJETO DEL ID FIRST
  let palabra = document.getElementById("first");

  //EJECUTAR LAS PROPIEDADES DE TEXTO DENTRO DEL ID Y MODIFICARLAS POR MEDIO DEL OBJETO
  palabra.textContent = texto;

  //CAMBIAR COLOR DE LA PALABRA POR MEDIO DEL OBJETO
  palabra.style.color = "magenta";

  // CAMBIAR TEXTO POR MEDIO DEL OBJETO CON OTRA PROPIEDAD DIFERENTE A TEXTCONETENT
  palabra.innerHTML = "negro";
  //let texto = document.getElementById("first");
  //texto.innerHTML = `<h4>Nombre: ${nombre} </h4>`;
}

//EJEMPLO DE FUNCION
function f2(nombre) {
  let apellido = "Ayala";
  return nombre + " " + apellido;
}

//EJEMPLO DE FOR Y while
function f3(variable) {
  document.write("AQUI ES EL FOR -><br>");
  for (let i = 0; i < variable.length; i++) {
    document.write(variable[i] + "<br>");
  }
}

function f4(variable) {
  document.write("AQUI ES EL WHILE ->");
  let i = 0;
  while (i < variable.length) {
    document.write(variable[i] + "<br>");
    i++;
  }
}

//EJEMPLO DE CONDICIONALES
function f5(valor) {
  document.write("AQUI ES EL IF ->");
  if (valor >= 90 && valor <= 100) {
    document.write("MEJOR CALIFICACION" + "<br>");
  } else if (valor >= 80 && valor < 90) {
    document.write("CALIFICACION PROMEDIO" + "<br>");
  } else if (valor < 80 && valor >= 0) {
    document.write("CALIFICACION BAJA" + "<br>");
  } else {
    document.write("FUERA DE RANGO" + "<br>");
  }
}

//IMPRIMIR
function imprimir(variable) {
  let texto = document.getElementById("imprimir");
  texto.innerHTML = variable;
}

let nombre = "claudio soto";
f1(nombre);

let nombreCompleto = f2(nombre);
imprimir(nombreCompleto);

let nombres = ["claudio", "sofia", "marcela"];
f3(nombres);
f4(nombres);

let calificacion = 99;
f5(calificacion);
calificacion = 85;
f5(calificacion);
calificacion = 55;
f5(calificacion);
calificacion = -1;
f5(calificacion);
calificacion = 120;
f5(calificacion);
