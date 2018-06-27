var GamePiece = require('./GamePiece.js');
var Snake = require('./Snake.js')
var canvas = document.querySelector('#game');
var context = canvas.getContext('2d');

var firstSnake = new Snake( 50, 50, 10, 10, 'rgb(255, 0, 0)', 1);
var foodBlock = new GamePiece ( 150, 10, 10, 10, 'rgb(0, 255, 0)', 0);
// randomly generate spawn location

var isGameOver = false;

var snakes = [
  firstSnake, 
  foodBlock,
  ];
  

  function animate(){
    snakes.forEach(function(firstSnake, i){
      firstSnake.draw(context);
      firstSnake.move();
      // firstSnake.controlSnake();
  
      snakes.forEach(function (foodBlock, j){
        if (i !== j & firstSnake.isCollidingWith(foodBlock)){
          console.log('Boom');
          firstSnake.dx = 0;
          foodBlock.dx = 0;
          // isGameOver = true; sample code, colliding with food should add to the snake array
          // add to length of snake
        }
      })
    })
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

// changed dx+=1 to dx =1 to prevent the speed from increasing about multiple arrow clicks in the same
canvas.addEventListener('keydown', keyPress);
function keyPress(event){
  switch(event.keyCode){
    case 37:
    firstSnake.dx=-1;firstSnake.dy+=0;
    console.log('37 pressed')
    break;
    case 38:
    firstSnake.dx+=0;firstSnake.dy=-1;
    console.log('38 pressed')
    break;
    case 39:
    firstSnake.dx=1;firstSnake.dy=0;
    console.log('39 pressed')
    break;
    case 40:
    firstSnake.dx+=0;firstSnake.dy=1;
    console.log('40 pressed')
    break;
  }}