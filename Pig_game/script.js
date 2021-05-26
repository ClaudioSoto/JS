//VARIABLES DE JUGADORES

//player 1
let player1 = document.querySelector(".player--0");
let nameP1 = document.getElementById("name--0");
let scoreP1 = document.getElementById("score--0");

//player 2
let player2 = document.querySelector(".player--1");
let nameP2 = document.getElementById("name--1");
let scoreP2 = document.getElementById("score--1");

//dado random
let random;

//variable de puntaje ganador
let winnerScore = 100;

//botones de turno
let turnButton = document.querySelector(".btn--roll");
let holdButton = document.querySelector(".btn--hold");
let newGameButton = document.querySelector(".btn--new");

//game elements
var dice = document.querySelector(".dice");
let currentScore = 0;
let currentPlayer = 0;

//funciones del juego

//inicializa nuevamente el juego con los valores iniciales
function initializeGame() {
  //se oculta el dado y se regresan los marcadores a 0
  dice.classList.add("hidden");
  scoreP1.textContent = 0;
  scoreP2.textContent = 0;

  //quitamos el color del ganador
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.remove("player--winner");

  //se pone el turno para el primer jugador
  if (currentPlayer === 1) {
    player1.classList.add("player--active");
    player2.classList.remove("player--active");
  }

  //se restablecen los nombres de los platers
  nameP1.textContent = "Player1";
  nameP2.textContent = "Player2";

  //reaparecen los botones y el player vuelve a ser el player 1
  turnButton.classList.remove("hidden");
  holdButton.classList.remove("hidden");
  currentPlayer = 0;
}

//hace un roll del dado y lo despliega en pantalla
function rollTheDice() {
  //sacamos numero random 1 - 6
  random = Math.floor(Math.random() * 6) + 1;

  //removemos el hidden para que se vea la imagen
  dice.classList.remove("hidden");

  //actualizamos el src con la imagen correcta dependiendo el random
  dice.src = `dice-${random}.png`;

  //cambiamos de jugador en caso de que el dado sea 1
  checkChangePlayer(random);
}

//revisa si debe cambiarse el turno del jugador
function checkChangePlayer(random) {
  if (random !== 1) {
    //no cmabia el player
    currentScore += random;
    document.getElementById(`current--${currentPlayer}`).textContent =
      currentScore;
  } else {
    //cambia el player
    document.getElementById(`current--${currentPlayer}`).textContent = 0;
    if (currentPlayer === 0) {
      currentPlayer = 1;
    } else {
      currentPlayer = 0;
    }
    //si existe active lo quita y si no existe lo pone
    player1.classList.toggle("player--active");
    player2.classList.toggle("player--active");
    currentScore = 0;
  }
}

// cambia el turno del jugador si presiona el hold
function changePlayerByHold() {
  if (currentPlayer === 0) {
    currentPlayer = 1;
  } else {
    currentPlayer = 0;
  }
  player1.classList.toggle("player--active");
  player2.classList.toggle("player--active");
}

//almacena los puntos hechos en el turno del jugador y si son mayores o igual a 100 gana
function holdPoints() {
  if (currentScore !== 0) {
    let actual = Number(
      document.getElementById(`score--${currentPlayer}`).textContent
    );
    document.getElementById(`score--${currentPlayer}`).textContent =
      currentScore + actual;
    if (actual + currentScore >= winnerScore) {
      document.getElementById(`current--${currentPlayer}`).textContent = 0;
      currentScore = 0;
      winGame();
    } else {
      document.getElementById(`current--${currentPlayer}`).textContent = 0;
      currentScore = 0;
      changePlayerByHold();
    }
  } else {
    alert("There is no points to hold!");
  }
}

//funcion para ganar el juego
function winGame() {
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.add("player--winner");

  turnButton.classList.add("hidden");
  holdButton.classList.add("hidden");
}

//EVENTS
initializeGame();
turnButton.addEventListener("click", rollTheDice);
holdButton.addEventListener("click", holdPoints);
newGameButton.addEventListener("click", initializeGame);
