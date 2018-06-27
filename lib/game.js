const Snake = require('./Snake.js');
const Food = require('./Food.js');

class Game {
  constructor(context) {
    this.gameOver = false;
    this.score = 0;
    this.highScore = 0;
    this.snake = new Snake;
    this.food = new Food;
  }
};