const Food = require('./Food.js');
const Snake = require('./Snake.js');
// const stylescript = require('../stylescript.js');
const Game = require('./Game.js');
const canvas = document.querySelector('#game');
const context = canvas.getContext('2d');
const game = new Game(context);

function gameLoop() {
  checkGameOver();
//   if (game.gameOver) {
//     context.clearRect(0, 0, canvas.width, canvas.height);
//     $('.game-over').css('visibility', 'visible');
//     return
//       // game.animate(context);
//       // requestAnimationFrame(gameLoop);
//     // checkDisplayGameOver();
// } else {
//     window.setTimeout(() => {
//       context.clearRect(0, 0, canvas.width, canvas.height);
//       game.animate(context);
//       requestAnimationFrame(gameLoop);
//       // checkNewSnakeLife();
//     }, 220);
//   }
}
// game.snake.die 
const checkNewSnakeLife = () => {
  console.log(game.snake.dead)
  if (game.snake.dead) {
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    gameLoop();
    game.startGame();
    game.animate(context);
    requestAnimationFrame(gameLoop);
  } else {
    context.clearRect(0, 0, canvas.width, canvas.height);
    // requestAnimationFrame(gameLoop);
    // game.startGame();
    game.animate(context);
    requestAnimationFrame(gameLoop);
  }

}

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

const checkGameOver = () => {
  if (game.snake.lives === 0) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    $('.game-over').css('visibility', 'visible');
    return
  } else {
    window.setTimeout(() => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      game.animate(context);
      requestAnimationFrame(gameLoop);
    }, 220);
  }
}
