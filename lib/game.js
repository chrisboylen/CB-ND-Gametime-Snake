// var GamePiece = require('./GamePiece.js');
const Snake = require('./Snake.js');
const Food = require('./Food.js');
// const playerScore = document.querySelector('.player-score');

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
    this.snake.drawSnakeBody(context);
    this.snake.move();
    this.food.draw(context);
    this.eatFood();
    this.snake.checkEatItself(context);
    this.snake.checkInBounds(context);
  }

  eatFood() {
    if (this.snake.head.isCollidingWith(this.food)) {
      this.food.createFood();
      this.snake.growSnake();
    }
  }
  
  resetGame() {
    this.snake.lives = 3;
  }
}

module.exports = Game;