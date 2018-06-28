const Food = require('./Food.js');
const Snake = require('./Snake.js')
const Game = require('./Game.js');
const canvas = document.querySelector('#game');
const context = canvas.getContext('2d');
const game = new Game(context);

const blocks = [
  game.snake, 
  game.food
];

function animate(){
  blocks.forEach((block, i) => {
    game.snake.draw(context);
    game.snake.move();
    game.food.draw(context);
    game.eatFood();
    checkInBounds();
    
    blocks.forEach((block2, j) => {
        if (i !== j & block.isCollidingWith(block2)){
          console.log('Boom');
          // firstSnake.dx = 0;
          // foodBlock.dx = 0;
          // isGameOver = true; sample code, colliding with food should add to the snake array
          // add to length of snake
        }
      })
    })
  }

function gameLoop(){
  context.clearRect(0, 0, canvas.width, canvas.height);

  // if(game.gameOver){
  //   //do game ending stuff
  // } else {
    animate();
    requestAnimationFrame(gameLoop);
  }
// }
requestAnimationFrame(gameLoop);

function checkInBounds() {
  if (game.snake.x < 0 || game.snake.x > canvas.width - game.snake.width || game.snake.y < 0 || game.snake.y > canvas.height - game.snake.height) {
    game.snake.death();
    console.log(game.snake.death)
    game.startAgain();
    console.log(game.startAgain())
  }
};

window.addEventListener('keydown', keyPress);

function keyPress(event) {
  switch(event.keyCode){
    case 37:
    game.snake.dx=-1;
    game.snake.dy=0;
    console.log('37 pressed')
    break;
    case 38:
    game.snake.dx=0;
    game.snake.dy=-1;
    console.log('38 pressed')
    break;
    case 39:
    game.snake.dx=1;
    game.snake.dy=0;
    console.log('39 pressed')
    break;
    case 40:
    game.snake.dx=0;
    game.snake.dy=1;
    console.log('40 pressed')
    break;
  }
};