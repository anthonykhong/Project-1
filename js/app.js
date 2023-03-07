/*----- constants -----*/

// Define constant which will hold an array of cards images
const cards = [
  "/imgs/zoro.jpg",
  "/imgs/zoro.jpg",
  "/imgs/nami.jpg",
  "/imgs/nami.jpg",
  "/imgs/ussop.jpg",
  "/imgs/ussop.jpg",
  "/imgs/sanji.jpg",
  "/imgs/sanji.jpg",
  "/imgs/chopper.jpg",
  "/imgs/chopper.jpg",
  "/imgs/robin.jpg",
  "/imgs/robin.jpg",
  "/imgs/franky.jpg",
  "/imgs/franky.jpg",
  "/imgs/brook.jpg",
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

// Add event listener which listens to cards clicked
containerEl.addEventListener("click", handleClick);
// Add event listener which listens to event when start button is clicked
startBtn.addEventListener("click", start);
// Add event listener which listens to event when restart button is clicked
restartBtn.addEventListener("click", restart);

/*----- functions -----*/

// Add initialize function
function init() {
  // Holds timer variable
  timer = null;
  // Holds matchedCards variable
  matchedCards = 0;
  // Holds flippedCards variable
  flippedCards = [];
  // Holds render function
  render();
  // Holds shuffle function
  shuffle(cards);
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
  timerEl.innerText = "";
}

// Add renderResults function
function renderResults() {
  resultsEl.innerText = "MATCH THE CARDS TO WIN";
}

// Add renderCards function
function renderCards() {
  containerEl.innerHTML = "";
  for (let i = 0; i < cards.length; i++) {
    const cardEl = document.createElement("div");
    cardEl.classList.add("card-item");
    cardEl.dataset.cardIndex = i;
    cardEl.style.backgroundImage = `url(${backCard})`;
    containerEl.appendChild(cardEl);
  }
}

// Add handleClick function
function handleClick(evt) {
  const clickedCard = evt.target;
  if (clickedCard.classList.contains("card-item") && flippedCards.length < 2) {
    flipCards(clickedCard);
  }
}

// Add flipCards function
function flipCards(clickedCard) {
  clickedCard.classList.remove("card-item");
  clickedCard.classList.add("flipped");
  clickedCard.style.backgroundImage = `url(${
    cards[clickedCard.dataset.cardIndex]
  })`;
  flippedCards.push(clickedCard);
  if (flippedCards.length === 2) {
    setTimeout(checkMatches, 1000);
  }
}

// Add checkMatches function
function checkMatches() {
  if (
    flippedCards[0].style.backgroundImage ===
    flippedCards[1].style.backgroundImage
  ) {
    matchedCards++;
    flippedCards = [];
    if (matchedCards === cards.length / 2) {
      setTimeout(() => {
        resultsEl.innerText = "YOU WIN!";
        clearInterval(timer);
        startBtn.disabled = false;
      }, 0);
    }
  } else {
    setTimeout(() => {
      flippedCards.forEach((card) => {
        card.classList.add("card-item");
        card.classList.remove("flipped");
        card.style.backgroundImage = `url(${backCard})`;
      });
      flippedCards = [];
    }, 1000);
  }
}

// Add start function
function start() {
  let count = 45;
  timerEl.style.visibility = "visible";
  timerEl.innerText = count;
  let timerId = setInterval(() => {
    count--;
    if (count) {
      timerEl.innerText = count;
    } else {
      clearInterval(timerId);
      timerEl.style.visibility = "hidden";
      resultsEl.innerText = "YOU LOSE!";
      startBtn.disabled = false;
    }
  }, 1000);
  timer = timerId;
  startBtn.disabled = true;
}

// Add restart function
function restart() {
  clearInterval(timer);
  startBtn.disabled = false;
  init();
}

// Add shuffle function
function shuffle(cards) {
  const shuffledCards = [...cards];
  for (let i = shuffledCards.length; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}

init();
