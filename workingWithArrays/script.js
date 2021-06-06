"use strict";

//array methods

//slice method de la posicion 2 en adelante, 3,4,5,6 , no inclusivo y no cambia el arreglo real
let a = [1, 2, 3, 4, 5, 6];
let b = [7, 8, 9, 10];
console.log(a.slice(2));

//con un rango 4-5
console.log(a.slice(2, 4));

//de atras hacia a delante 5,6
console.log(a.slice(-2));

console.log(a);

//splice method sirve para mutar o cambiar el arreglo original y hace lo mismo que slice

console.log(a.splice(2));

//se eliminaron los elementos de 3-6, solo quedan 1 y 2
console.log(a);

//reverse method sirve para voltear el arreglo, si muta o cambia el arreglo
console.log(b.reverse());

//concatenar arreglo, no muta el arreglo
let c = a.concat(b);

console.log(c);

//foreach y ciclos

for (let element of c) {
  console.log(element);
}

//primer parametro es elemento, segundo el index y tercero array
c.forEach(function (element, index, array) {
  console.log("inside forEach,index:", index, element);
});
