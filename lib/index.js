const Food = require('./Food.js');
const Snake = require('./Snake.js')
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

game.startGame()

function gameLoop(){
  window.setTimeout(() => {
    context.clearRect(0, 0, canvas.width, canvas.height);

  // if(game.gameOver){
  //   //do game ending stuff
  // } else {
    game.animate(context);
    requestAnimationFrame(gameLoop);
  }, 120)
};
// }
requestAnimationFrame(gameLoop);

window.addEventListener('keydown', keyPress);
// window.addEventListener("keydown", function (event) {
//   // space and arrow keys
//   if ([37, 38, 39, 40].indexOf(e.keyboard) > -1) {
//     event.preventDefault();
//   }
// }, false);

const keyboard = {
  37: () => game.snake.changeDirection('left'),
  38: () => game.snake.changeDirection('up'),
  39: () => game.snake.changeDirection('right'),
  40: () => game.snake.changeDirection('down'),
};

function keyPress(event) {
  if(keyboard[event.keyCode]) {
    keyboard[event.keyCode]()
  }
};

// function keyPress(event) {
//   switch(event.keyCode){
//     case 37:
//     game.snake.dx=-1;
//     game.snake.dy=0;
//     break;
//     case 38:
//     game.snake.dx=0;
//     game.snake.dy=-1;
//     break;
//     case 39:
//     game.snake.dx=1;
//     game.snake.dy=0;
//     break;
//     case 40:
//     game.snake.dx=0;
//     game.snake.dy=1;
//     break;
//   }
// };