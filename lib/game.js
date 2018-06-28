var GamePiece = require('./GamePiece.js');
const Snake = require('./Snake.js');
const Food = require('./Food.js');

class Game {
  constructor(context) {
    this.context = context;
    this.gameOver = false;
    this.score = 0;
    this.highScore = 0;
    this.snake = new Snake(50, 50, 10, 10, 'rgb(255, 0, 0)', 1);
    this.food = new Food(150, 10, 10, 10, 'rgb(0, 255, 0)');
  }

  eatFood() {
    if (this.isCollidingWith(food)) {
      food.draw(context)
      console.log(snap)
    }
  }

  increaseScore() {
    if (this.snake.eatFood()) {
      this.snake.scorePoint();
      this.snake.dx += 1;
    }
  };

  resetGame() {
    this.snake.lives = 3;
    this.snake.lives = 0;
    this.snake.dx = 1;
  }
};

module.exports = Game;