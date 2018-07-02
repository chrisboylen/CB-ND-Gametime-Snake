var GamePiece = require('./GamePiece.js');

class Food extends GamePiece {
  constructor(x, y, height = 20, width = 20, color) {
    super(x, y, height = 20, width = 20, color);
    this.x = x;
    this.y = y;
    this.color = 'red';
  };

  createFood() {
    this.x = (Math.floor(Math.random() * 22) * 18);
    this.y = (Math.floor(Math.random() * 33) * 18);
  };
};

module.exports = Food;