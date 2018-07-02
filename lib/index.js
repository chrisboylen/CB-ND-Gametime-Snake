const Food = require('./Food.js');
const Snake = require('./Snake.js');
const Game = require('./Game.js');
const canvas = document.querySelector('#game');
const context = canvas.getContext('2d');
const game = new Game(context);

// const blocks = [
//   game.snake, 
//   game.food
// ];

// function animate(){
//   blocks.forEach((block, i) => {
//     game.snake.draw();
//     game.snake.move();
//     game.food.draw(context);
//     game.eatFood();
//     checkInBounds();
    
//     blocks.forEach((block2, j) => {
//         if (i !== j & block.isCollidingWith(block2)){
//           console.log('Boom');
//           // firstSnake.dx = 0;
//           // foodBlock.dx = 0;
//           // isGameOver = true; sample code, colliding with food should add to the snake array
//           // add to length of snake
//         }
//       })
//     })
//   }

game.startGame();

function gameLoop() {
  window.setTimeout(() => {
    context.clearRect(0, 0, canvas.width, canvas.height);

  // if(game.gameOver){
  //   //do game ending stuff
  // } else {
    game.animate(context);
    requestAnimationFrame(gameLoop);
  }, 120);
}
// }
requestAnimationFrame(gameLoop);

// function checkInBounds() {
//   if (game.snake.x < 0 || game.snake.x > canvas.width - game.snake.width || game.snake.y < 0 || game.snake.y > canvas.height - game.snake.height) {
//     game.snake.death();
//     console.log(game.snake.death)
//     game.startAgain(context);
//     console.log(game.startAgain)
//   }
// };

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

