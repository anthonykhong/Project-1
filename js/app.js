/*----- constants -----*/

// Define constant which will hold an array of cards images
const cards = [
  "/imgs/zoro.jpg",
  "/imgs/nami.jpg",
  "/imgs/ussop.jpg",
  "/imgs/sanji.jpg",
  "/imgs/chopper.jpg",
  "/imgs/robin.jpg",
  "/imgs/franky.jpg",
  "/imgs/brook.jpg",
  "/imgs/zoro.jpg",
  "/imgs/nami.jpg",
  "/imgs/ussop.jpg",
  "/imgs/sanji.jpg",
  "/imgs/chopper.jpg",
  "/imgs/robin.jpg",
  "/imgs/franky.jpg",
  "/imgs/brook.jpg",
];
// Define constant which will hold a single array of flipped card image
const backCard = ["/imgs/back.png"];

/*----- state variables -----*/

// Define timer variable
let timer;
// Define matchedCards variable
let matchedCards;
// Define flippedCards variable
let flippedCards;

/*----- cached elements  -----*/

// Define a variable which will select card-container class from html
const containerEl = document.querySelector(".card-container");
// Define variable which will select timer class from html
const timerEl = document.querySelector(".timer");
// Define variable which will select results
const resultsEl = document.querySelector(".results");
// Define variable which will select .start button from html
const startBtn = document.querySelector(".start");
// Define variable which will select .restart button from html
const restartBtn = document.querySelector(".restart");

/*----- event listeners -----*/

// // Add event listener which listens to cards clicked
// containerEl.addEventListener("click", handleClick);
// // Add event listener which listens to event when start button is clicked
// startBtn.addEventListener("click", start);
// // Add event listener which listens to event when restart button is clicked
// restartBtn.addEventListener("click", restart);

/*----- functions -----*/

init();
// Add initialize function
function init() {
  // Holds timer variable
  let timer = 45;
  // Holds matchedCards variable
  let matchedCards = 0;
  // Holds flippedCards variable
  let flippedCards = [];
  // Holds render function
  render();
  // Holds start function
  start();
  // Holds shuffle function
  shuffle();
}

// Add render function
function render() {
  // Holds renderTimer function
  renderTimer();
  // Holds renderResults function
  renderResults();
  // Holds renderCards function
  renderCards();
}

// Add renderTimer function
function renderTimer() {
  timerEl.innerText = 45;
}

// Add renderResults function
function renderResults() {
  if (matchedCards === cards.length) {
    resultsEl.innerText = "YOU WIN!";
  } else {
    resultsEl.innerText = "MATCH THE CARDS TO WIN";
  }
}

// Add renderCards function
function renderCards() {
  containerEl.innerHTML = "";
  for (let i = 0; i < cards.length; i++) {
    const cardEl = document.createElement("div");
    cardEl.classList.add("card-item");
    cardEl.style.backgroundImage = `url(${backCard})`;
    containerEl.appendChild(cardEl);
  }
}

// Add handleClick function

// Add flipCards function

// Add checkMatches function

// Add start function

// Add restart function

// Add shuffle function
