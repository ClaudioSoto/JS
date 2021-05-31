"use strict";

//switching variables para evitar crear una variable auxiliar
let nombre = "claudio";
let apellido = "soto";
console.log(nombre, " ", apellido);
[nombre, apellido] = [apellido, nombre];

console.log(nombre, " ", apellido);

//sacar elementos de un objeto a forma de variables
let claudio = {
  names: "luis",
  hobbies: ["nadar", "programar", "ejercicio"],
  age: 23,
};

const { names, hobbies, age } = claudio;
console.log(names, hobbies, age);

//obetener valores pero con otro nombre, niggas y hobbies tienen un vacio en caso de que la propiedad no exista
const { names: n, hobbies: p = [], age: e, niggas: ni = [] } = claudio;
console.log(n, p, e, ni);

//mutating variables with objets
let a = 10;
let b = 11;
let obj = {
  a: 100,
  b: 111,
  c: {
    open: 11,
    close: 12,
  },
};
({ a, b } = obj);
console.log(a, b);

//para objetos anidados ,obtener propiedades
const {
  c: { open: o, close: cl },
} = obj;
console.log(o, cl);

//spread operator es un operador para hacer push de todos los elementos de un arreglo
let arreglo1 = [1, 2, 3, 4];
let arreglo2 = [5, 6, 7, 8, ...arreglo1];
console.log(arreglo2);

//para hacer split de un string
let cuadro = "cuadro";
let arreglo3 = [...cuadro];
console.log(arreglo3);
