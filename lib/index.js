const Game = require('./Game.js');
const canvas = document.querySelector('#game');
const context = canvas.getContext('2d');
const game = new Game(context);

window.addEventListener('keydown', keyPress);

function gameLoop() {
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

function hideWelcomeScreen(){
  $(".welcome-screen").css('visibility', 'hidden');
}

function displayHeaderBox(){
  $(".header-box").css('visibility', 'visible');
}

$('.start-game').click(function() {
  displayHeaderBox();
  hideWelcomeScreen();
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
});

const submitNewScore = () => {
  let userName = $('.player-score-input').val();
  let myScore = game.score;
  let newScore = `<li>${userName}....................${myScore}</li>`;

  $('.score-list').append(newScore);
};

window.addEventListener('keydown', keyPress);



$('.close-instructions').click(function() { 
  $('.descriptive-overlay').animate({left: -500});
});


$('.open-instructions').on('click', function(){
  openDescOverlay()
})

function openDescOverlay(){
  $('.descriptive-overlay').animate({left: 0})
}

