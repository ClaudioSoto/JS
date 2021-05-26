"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const buttonCloseModal = document.querySelector(".close-modal");
const buttonOpenModal = document.querySelectorAll(".show-modal");
let l = buttonOpenModal.length;

//funciones para modal
function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

//Evento para abrir los modals
for (let i = 0; i < l; i++) {
  buttonOpenModal[i].addEventListener("click", openModal);
}

//eventos para cerrar el modal
buttonCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    //si no contiene hidden,significa que esta abierto el modal, por lo tanto lo cierras
    if (!modal.classList.contains("hidden")) {
      closeModal();
    }
  }
});
