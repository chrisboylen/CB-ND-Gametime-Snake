const Game = require('./Game.js');
const canvas = document.querySelector('#game');
const context = canvas.getContext('2d');
const game = new Game(context);

window.addEventListener('keydown', keyPress);

const gameLoop = () => {
  document.querySelector('.player-score').innerText = game.score;
  checkGameOver();
}

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

const displayHeaderBox = () => document.querySelector(".header-box").classList.toggle('shown')


const hideWelcomeScreen = () => document.querySelector(".welcome-screen").classList.toggle('hide')

const startButton = document.querySelector('.start-game');
startButton.addEventListener('click', function(){
  displayHeaderBox();
  hideWelcomeScreen();
  requestAnimationFrame(gameLoop);
  game.startGame();
})



$('.retry-button').click(function() {
  location.reload();
});

const checkGameOver = () => {
  if (game.snake.dead) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    $('.game-over').css('visibility', 'visible');
    $('.player-score-input').css('visibility', 'visible');
    return;
  } else {
    window.setTimeout(() => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      game.animate(context);
      requestAnimationFrame(gameLoop);
    }, 120);
  }
};



$('.submit-button').on('click', function() {
  submitNewScore();
  $('.player-score-input').css('visibility', 'hidden');
});


const submitNewScore = () => {
  let userName = $('.player-score-input').val();
  let myScore = game.score;
  let newScore = `<li>${userName}....................${myScore}</li>`;

  $('.score-list').append(newScore);
};





$('.close-instructions').click(function() { 
  $('.descriptive-overlay').animate({left: -500});
});


$('.open-instructions').on('click', function() {
  openDescOverlay();
});

function openDescOverlay() {
  $('.descriptive-overlay').animate({left: 0});
}

