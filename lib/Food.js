var GamePiece = require('./GamePiece.js');

class Food extends GamePiece {
  constructor(x, y, height = 10, width = 10, color, ) {
    super(x, y, height = 10, width = 10, color);
    this.x = x;
    this.y = y;
    this.color = 'red';
  };

  createFood() {
    this.x = (Math.floor(Math.random() * 40) * 10);
    this.y = (Math.floor(Math.random() * 40) * 10);
  };
};

module.exports = Food;