const Food = require('./Food.js');
const Snake = require('./Snake.js')
const Game = require('./Game.js');
const canvas = document.querySelector('#game');
const context = canvas.getContext('2d');
const game = new Game(context);

// var snake = new Snake( 50, 50, 10, 10, 'rgb(255, 0, 0)', 1);
// var food = new Food ( 150, 10, 10, 10, 'rgb(0, 255, 0)', 0);
// randomly generate spawn location

var isGameOver = false;

// var snakes = [
//   firstSnake, 
//   foodBlock,
//   ];
function animate(){
  game.snake.draw(context);
  game.food.draw(context);
  game.snake.move();
    // snakes.forEach(function(firstSnake, i){
    //   // firstSnake.controlSnake();
    //   snakes.forEach(function (foodBlock, j){
    //     if (i !== j & firstSnake.isCollidingWith(foodBlock)){
    //       console.log('Boom');
    //       firstSnake.dx = 0;
    //       foodBlock.dx = 0;
    //       // isGameOver = true; sample code, colliding with food should add to the snake array
    //       // add to length of snake
    //     }
    //   })
    // })
  }

function gameLoop(){
  context.clearRect(0, 0, canvas.width, canvas.height);

  if(isGameOver){
    //do game ending stuff
  } else {
    animate();
  }
  requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);


canvas.addEventListener('keydown', keyPress);

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