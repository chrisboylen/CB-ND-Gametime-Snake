var GamePiece = require('./GamePiece.js');

class Snake extends GamePiece {
  constructor(x, y, height, width, color, dx, dy, dxv){
    super(x, y, height, width, color, dx, dy, dxv);
    // this.score = score;
    // this.lives = lives
    this.tail = [];
  }
}

module.exports = Snake;