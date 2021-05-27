"use strict";

//switching variables para evitar crear una variable auxiliar
let nombre = "claudio";
let apellido = "soto";
console.log(nombre, " ", apellido);
[nombre, apellido] = [apellido, nombre];

console.log(nombre, " ", apellido);
