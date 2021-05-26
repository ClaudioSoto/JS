// CLASE 3

/*
Aprendizajes
------------

1= funciones anonimas o expresiones son otra forma de generar funciones sin nombrarlas, se puede llamar mediante el nombre de variable

2=Arrow functions son un tercer tipo de funciones que evitan las llaves y return, buenas para calculos de una sola linea
  let guardarResultafo = (parametro1,parametro2) => calculos + parametro1 + parametro2;

3=Se pueden declarar arreglos de 2 formas
  let friends = [];
  let friends = new Array();

*/

'use strict';


//FUNCION REGULAR
function age1(birthYear){
  return 2021 - birthYear;
}

//EXPRESION
let age2 = function (birthYear){
  return 2021 - birthYear;
}

//ARROW FUNCTION
let age3 = birthYear => 2021 - birthYear;

let yearsUntilRetirenmet = birthYear =>{
  let age = 2021 - birthYear;
  return 65 - age;
}

//OPERACIONES array
function operaciones(array){
  //insertar al final de la lista
  array.push("hi");
  console.log(array);

  //eliminar elemento al final del arreglo
  array.pop();
  console.log(array);

  //insertar al principio de la lista
  array.unshift("hi");
  console.log(array);

  //eliminar elemento al prinmcipio, argumentos vacios
  array.shift();
  console.log(array);

  //obtener index dada la existencia de un elemento, si no existe -1
  console.log(array.indexOf("hola"));
  console.log(array.indexOf("hijo"));

  //para saber si existe un elemento en el arreglo
  console.log(array.includes("hola"));
  console.log(array.includes("hijo"));
}

//llamar funcion REGULAR
let edad = age1(1996);
console.log(edad);

//llamar EXPRESION
edad = age2(1996);
console.log(edad);

//llamar a la ARROW FUNCION
edad = age3(1996);
console.log(edad);

let edadRetiro = yearsUntilRetirenmet(1996);
console.log(edadRetiro);

//OPERACIONES DE ARRAYS
operaciones(["hola","hello"]);
