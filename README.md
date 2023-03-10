<div align="center">

![image](./imgs/back.png)

# One Piece Memory Game

</div>

<div align="center">

## Created by: [Anthony Khong](https://github.com/anthonykhong)

<img width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
<img  width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" />
<img width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" />
<img width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
<img width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />

</div>

<div align="center">

### Click [Play](https://anthonykhong.github.io/concentrationGame/) to start the game

</div>

## Description

<p>This is a browser-based memory game created using Javascript.</p>
<p>As a fan of the manga One Piece, I have decided to use it as the theme of this game. Furthermore, I used each individual crew member as an inspiration for the design of my flipped cards.</p>

## Getting Started

1. Press <kbd>start</kbd> to initialize the game.
2. Flip the cards in order to find matching pairs.
3. If all cards are matched before the timer runs out, you win! Or else, you lose.
4. Press <kbd>restart</kbd> to play again!

## Screenshots

![main image](./imgs/main.png)

![gif](./imgs/main2.gif)

## Interesting code

```
function shuffle(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}
```

This piece of code was interesting to work on. It allowed me to learn about the Fisher-Yates shuffle method, which shuffles the elements in place rather than create a copy.

## Upcoming Features

<li>A start page with instructions.</li>
<li>A restart page.</li>
<li>Log number of moves the player has made.</li>
<li>Implement moves in win/loss logic.</li>
<li>Additional levels.</li>
