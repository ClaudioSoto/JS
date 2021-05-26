// CLASE 4

/*
Aprendizajes
------------

1=

*/

"use strict";

let claudio = {
  nombre: "claudio",
  apellidos: "soto ayala",
  edad: 24,
  pasatiempos: "programar",
  nombre_completo: function () {
    return this.nombre + " " + this.apellidos;
  },
};

//NOTACION DE PUNTO PARA ACCEDER A LOS ATRIBUTOS BAJO EL NOMBRE
console.log(claudio);
console.log(claudio.nombre + " " + claudio.apellidos);

//NOTACION DE CORCHETES PARA ACCEDER A LOS ATRIBUTOS MEDIANTE STRING
console.log(claudio["nombre"]);

//AGREGAR PROPIEDADES AL OBJETO CON 2 OPERADORES
claudio.ciudad = "Celaya";
claudio["carro"] = "BMW";

console.log(claudio);

// IMPRIMIR FUNCION DE NOMBRE COMPLETO DE OBJETO CLAUDIO ACCEDIENDO A SUS PROPIOS OBJETOS
console.log(claudio.nombre_completo() + " server");
