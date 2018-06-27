var GamePiece = require('./GamePiece.js');

class Food extends GamePiece {
  constructor(x, y, height, width, color, dx, dy) {
    super(x, y, height, width, color, dx, dy);
  }
};

module.exports = Food;