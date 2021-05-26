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
};

claudio.fraseFavorita();
