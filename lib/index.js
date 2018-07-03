const Food = require('./Food.js');
const Snake = require('./Snake.js');
const Game = require('./Game.js');
const canvas = document.querySelector('#game');
const context = canvas.getContext('2d');
const game = new Game(context);



function gameLoop() {
  window.setTimeout(() => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    game.animate(context);
    requestAnimationFrame(gameLoop);
  }, 150);
}

// function displayGameOver() {
//   $(".game-over").css("visibility", "visible");
// }

requestAnimationFrame(gameLoop);

window.addEventListener('keydown', keyPress);


document.addEventListener('keydown', keyPress);

const keyboard = {
  65: () => game.snake.changeDirection('left'),
  87: () => game.snake.changeDirection('up'),
  68: () => game.snake.changeDirection('right'),
  83: () => game.snake.changeDirection('down'),
};

function keyPress(event) {
  if (keyboard[event.keyCode]) {
    keyboard[event.keyCode]();
  }
}

$('.start-game').click(function() {
  $(".header-box").css("opacity", 100);
  $(".welcome-screen").css("opacity", 0);
  $(".welcome-screen").animate({left: -500});
  requestAnimationFrame(gameLoop);
  game.startGame();
});

$('.retry-button').click(function() {
  location.reload();
});

$('.open-instructions').click(function() {
  $(this).closest('.descriptive-text').find('.descriptive-overlay').animate({left: 0});
});

$('.close-instructions').click(function() {
  $(this).closest('.descriptive-text').find('.descriptive-overlay').animate({left: -500});
});

$('.submit-score').on('click', saveScore);

function saveScore() {
  var userScore = $('.player-score-input');
  submitNewScore();
  this.reset();
}

const submitNewScore = () => {
  let userName = $('.player-score-input').val();
  let myScore = game.score
  let newScore = `<li>${userName}....................${myScore}</li>`;
  $('.score-list').append(newScore);
  console.log('hi');
}