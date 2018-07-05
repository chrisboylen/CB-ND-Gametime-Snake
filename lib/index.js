const Game = require('./Game.js');
const canvas = document.querySelector('#game');
const context = canvas.getContext('2d');
const game = new Game(context);

window.addEventListener('keydown', keyPress);

document.querySelector('.retry-button').addEventListener('click', function() {
  location.reload();
});

document.querySelector('.new-game').addEventListener('click', function() {
  location.reload();
});


const gameLoop = () => {
  document.querySelector('.player-score').innerText = game.score;
  checkGameOver();
};

const keyboard = {
  65: () => game.snake.direction !== 
  'right' ? game.snake.direction = 'left' : game.snake.direction,
  87: () => game.snake.direction !== 
  'down' ? game.snake.direction = 'up' : game.snake.direction, 
  68: () => game.snake.direction !== 
  'left' ? game.snake.direction = 'right' : game.snake.direction,
  83: () => game.snake.direction !== 
  'up' ? game.snake.direction = 'down' : game.snake.direction,
};

function keyPress(event) {
  if (keyboard[event.keyCode]) {
    keyboard[event.keyCode]();
  }
}

const displayHeaderBox = () => 
  document.querySelector('.header-box').classList.toggle('shown');


const hideWelcomeScreen = () => 
  document.querySelector('.welcome-screen').classList.toggle('hide');

document.querySelector('.start-game').addEventListener('click', function() {
  displayHeaderBox();
  hideWelcomeScreen();
  requestAnimationFrame(gameLoop);
  game.startGame();
});

const checkGameOver = () => {
  if (game.snake.dead) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    document.querySelector('.game-over').classList.toggle('shown');
    submitScore();
    return;
  } else {
    window.setTimeout(() => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      game.animate(context);
      requestAnimationFrame(gameLoop);
    }, 120);
  }
};

const submitScore = () => {
  if (game.score >= game.highScore) {
    document.querySelector('.high-score-input').classList.toggle('shown');
  } else {
    document.querySelector('.input-your-score').classList.toggle('shown');
  }
};

const submitButton = document.querySelector('.submit-button');

submitButton.addEventListener('click', function() {
  submitNewScore();
  document.querySelector('.submit-button').classList.toggle('hide');
  this.reset();
});

const submitNewScore = () => {
  const score = document.querySelector('.score-list');
  let userName = document.querySelector('.player-score-input').value;
  let myScore = game.score;
  const node = document.createElement('LI');
  node.innerHTML = `${userName}................${myScore}`;
  score.appendChild(node);
  // node.appendChild(text);
};

