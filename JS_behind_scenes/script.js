"use strict";

const claudio = {
  nombre: "claudio",
  edad: 24,
  estadoCivil: "soltero",
  fraseFavorita: function () {
    console.log(
      "My name is " + this.nombre + " and i have " + this.edad + " years old!"
    );
  },
  fraseMenosFavorita: () => {
    console.log("My name is " + this.nombre + " and more");
  },
};

claudio.fraseFavorita();
claudio.fraseMenosFavorita();

//diferencia entre las arrow functions y las funciones normales, es que arrow function
//no acepta la palabra this como valida dentro de un objeto

//PRIMITIVE TYPES
//se aloca nombre en stack, nuevo nombre  hace referencia a nombre en stack,nombre aloca nueva memoria para reasignar a chots
let nombre = "claudio";
let nuevoNombre = nombre;
nombre = "chots";
console.log(nombre, " ", nuevoNombre);

//REFERENCE TYPES
//aqui se crea el objeto marcela2 y "se crea una copia", sin embargo es una variable que apunta al mismo objeto dentro del heap,
// por lo tanto cualquiera de los 2 objetos puede modificar los atrbutos ya que comparte exactamente el mismo objeto,
//no se hace una copia sino que se comparte.
const marcela = {
  nombre: "marcela",
  edad: 23,
};

//se puede modificar los atributos a pesar de ser const ya que se modifica el objeto en el heap y no en el stack,
//sin embargo, si se trata de modificar el objeto (la estructura) no se va a poder
const marcela2 = marcela;
marcela2.nombre = "marcela soto";

console.log(marcela, " ", marcela2);

//para copiar un objeto realmente, sin mebargo, no puede copiar objetos anidados por lo que no hace un clon sino una sombra
const marcela3 = Object.assign({}, marcela);
marcela3.nombre = "marcela de claudio";

console.log(marcela, " ", marcela3);
