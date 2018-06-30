var GamePiece = require('./GamePiece.js');
const Snake = require('./Snake.js');
const Food = require('./Food.js');

class Game {
  constructor() {
    this.gameOver = false;
    this.score = 0;
    this.highScore = 0;
    this.snake = new Snake(50, 50, 20, 20, 'rgb(255, 0, 0)', 0);
    this.food = new Food(150, 10, 18, 18, 'rgb(0, 255, 0)');
    this.blocks = [
      this.snake,
      this.food
    ];
  }

  startGame() {
    this.snake.makeInitialSnake();
  };

  animate(context) {
    this.blocks.forEach((block, i) => {
      this.snake.move().drawSnakeBody(context);
      // this.snake.move();
      this.food.draw(context);
      this.eatFood();
      // this.snake.checkInBounds(context);

      this.blocks.forEach((block2, j) => {
        if (i !== j & block.isCollidingWith(block2)) {
          console.log('Boom');
          // firstSnake.dx = 0;
          // foodBlock.dx = 0;
          // isGameOver = true; sample code, colliding with food should add to the snake array
          // add to length of snake
        }
      })
    })
  }

  eatFood() {
    if (this.snake.head.isCollidingWith(this.food)) {
      this.score += 1;
      this.food.createFood();
      this.snake.growSnake();
    }
  };

  increaseScore() {
    if (this.snake.eatFood()) {
      this.snake.scorePoint();
      this.snake.dx += 1;
    }
  };

  // startAgain (context) {
  //   console.log(game)
  //   context.clearRect(0, 0, window.width, window.height);
  //   this.snake.draw(this.context);
  //   this.food.draw(this.context);
  // };

  resetGame() {
    this.snake.lives = 3;
    this.snake.lives = 0;
    this.snake.dx = 1;
  };
};

module.exports = Game;