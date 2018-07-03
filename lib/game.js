var GamePiece = require('./GamePiece.js');
const Snake = require('./Snake.js');
const Food = require('./Food.js');
const playerScore = document.querySelector('.player-score');

class Game {
  constructor() {
    this.gameOver = false;
    this.score = 0;
    this.highScore = 0;
    this.snake = new Snake(50, 50, 20, 20, 'rgb(255, 0, 0)', 0);
    this.food = new Food(350, 20, 20, 20, 'rgb(0, 255, 0)');
    this.blocks = [
      this.snake,
      this.food
    ];
  }

  startGame() {
    this.snake.die = false;
    this.snake.makeInitialSnake();
  }

  animate(context) {
    this.blocks.forEach((block, i) => {
      this.snake.move().drawSnakeBody(context);
      this.food.draw(context);
      this.eatFood();
      this.snake.checkEatItself(context);
      this.snake.checkInBounds(context);
    });
  }

  increaseScore() {
    var scoreNumber = this.score++;

    playerScore.innerText = scoreNumber;
  }

  eatFood() {
    if (this.snake.head.isCollidingWith(this.food)) {
      this.food.createFood();
      this.snake.growSnake();
      this.increaseScore();
    }
  }

  detectCollisionBorder(context) {
    if (this.snake.head.x < 20 || this.snake.head.x > 380 || this.snake.head.y < 20 || this.snake.head.y > 580) {
      this.snake.death();
      console.log(this.snake.lives);
    }
  }
  
  resetGame() {
    this.snake.lives = 3;
  }
}

module.exports = Game;