"use strict";

//sacar el contenido de la etiqueta de la clase menssage
console.log(document.querySelector(".message").textContent);

//CALCULATE THE RANDOM NUMBER
let random = Math.floor(Math.random() * 21);
console.log("El numero random es:" + random);

//SCORES
let score = 20;
let highScore = 0;

// HANDLER TO BUTTON AGAIN
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  random = Math.floor(Math.random() * 21);
  console.log("El numero random es:" + random);
  console.log("click en again");
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
});

// HANDLER CLICK GUESS EVENT
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log("EL GUESS DEL JUGADOR ES: " + guess);
  console.log("El TIPO DE DATOS ES:" + typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "No input!";
  } else if (guess < 0 || guess > 20) {
    document.querySelector(".message").textContent = "Introduce a valid number";
  } else {
    if (guess > random) {
      document.querySelector(".message").textContent =
        "The guess is bigger than secret value";
      score = score - 1;
    } else if (guess < random) {
      document.querySelector(".message").textContent =
        "The guess is smaller than secret value";
      score = score - 1;
    } else if (guess === random) {
      document.querySelector(".message").textContent = "Correct";
      document.querySelector(".number").textContent = random;
      document.querySelector(".number").style.width = "30rem";
      document.querySelector("body").style.backgroundColor = "green";

      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = score;
      }
    }
  }
  document.querySelector(".score").textContent = score;

  if (score <= 0) {
    document.querySelector(".message").textContent = "Gamer over";
  }
});
