/*----- constants -----*/

const cards = [
  "./imgs/zoro.jpg",
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
const backCard = "/imgs/back.png";
const audio = new Audio("flip_audio.mp3");

/*----- state variables -----*/

let timer;
let matchedCards;
let flippedCards;
let started;

/*----- cached elements  -----*/

const containerEl = document.querySelector(".card-container");
const timerEl = document.querySelector(".timer");
const resultsEl = document.querySelector(".results");
const startBtn = document.querySelector(".start");
const restartBtn = document.querySelector(".restart");

/*----- event listeners -----*/

containerEl.addEventListener("click", handleClick);
startBtn.addEventListener("click", start);
restartBtn.addEventListener("click", restart);

/*----- functions -----*/

function init() {
  timer = null;
  matchedCards = 0;
  flippedCards = [];
  shuffle(cards);
  const cardEls = containerEl.querySelectorAll(".flipped");
  cardEls.forEach((card) => {
    card.classList.remove("flipped");
    card.classList.add("card-item");
    card.style.backgroundImage = `url(${backCard})`;
  });
  render();
}

function render() {
  renderTimer();
  renderResults();
  renderCards();
}

function renderTimer() {
  timerEl.innerText = "";
}

function renderResults() {
  resultsEl.innerText = "MATCH THE CARDS TO WIN";
  resultsEl.style.color = "white";
}

function renderCards() {
  if (!containerEl.hasChildNodes()) {
    containerEl.innerHTML = "";
    for (let i = 0; i < cards.length; i++) {
      const cardEl = document.createElement("div");
      cardEl.classList.add("card-item");
      cardEl.dataset.cardIndex = i;
      // Data sets will allow access to values outside of this function
      // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
      cardEl.style.backgroundImage = `url(${backCard})`;
      containerEl.appendChild(cardEl);
    }
  }
}

function handleClick(evt) {
  if (!started) return;
  const clickedCard = evt.target;
  if (clickedCard.classList.contains("card-item") && flippedCards.length < 2) {
    flipCards(clickedCard);
  }
}

function flipCards(clickedCard) {
  audio.play();
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

function checkMatches() {
  if (
    flippedCards[0].style.backgroundImage ===
    flippedCards[1].style.backgroundImage
  ) {
    matchedCards++;
    resultsEl.innerText = "MATCHED!";
    resultsEl.style.color = "#4BEA80";
    flippedCards = [];
    if (matchedCards === cards.length / 2) {
      setTimeout(() => {
        resultsEl.innerText = "YOU WIN!";
        resultsEl.style.color = "white";
        clearInterval(timer);
        startBtn.disabled = true;
      }, 100);
    }
  } else {
    resultsEl.innerText = "WRONG GUESS";
    resultsEl.style.color = "#D93535";
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

function start() {
  init();
  started = true;
  let count = 60;
  timerEl.style.visibility = "visible";
  timerEl.innerText = count;
  let timerId = setInterval(() => {
    count--;
    if (count) {
      timerEl.innerText = count;
    } else {
      started = false;
      clearInterval(timerId);
      timerEl.style.visibility = "hidden";
      resultsEl.innerText = "YOU LOSE!";
      resultsEl.style.color = "white";
      startBtn.disabled = true;
    }
  }, 1000);
  // Countdown - GA rock, paper, scissors code along
  timer = timerId;
  startBtn.disabled = true;
}

function restart() {
  started = false;
  clearInterval(timer);
  startBtn.disabled = false;
  init();
}

function shuffle(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}
// Fisher-Yates shuffle method
// https://www.tutorialspoint.com/what-is-fisher-yates-shuffle-in-javascript
// https://stackoverflow.com/questions/73949977/1-card-is-undefined-when-trying-to-shuffle-deck

renderCards();
