const Food = require('./Food.js');
const Snake = require('./Snake.js');
const Game = require('./Game.js');
const canvas = document.querySelector('#game');
const context = canvas.getContext('2d');
const game = new Game(context);

window.addEventListener('keydown', keyPress);

function gameLoop() {
  checkGameOver();
 }

const keyboard = {
  65: () => game.snake.direction !== 'right' ? game.snake.direction = 'left' : game.snake.direction,
  87: () => game.snake.direction !== 'down' ? game.snake.direction = 'up': game.snake.direction, 
  68: () => game.snake.direction !== 'left' ? game.snake.direction = 'right' : game.snake.direction,
  83: () => game.snake.direction !== 'up' ? game.snake.direction = 'down' : game.snake.direction,
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

const checkGameOver = () => {
  if (game.snake.dead) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    $('.game-over').css('visibility', 'visible');
    return
  } else {
    window.setTimeout(() => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      game.animate(context);
      requestAnimationFrame(gameLoop);
    }, 120);
  }
}
