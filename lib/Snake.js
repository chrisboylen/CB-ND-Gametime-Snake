var GamePiece = require('./GamePiece.js');
var canvas = document.querySelector('#game')

class Snake extends GamePiece {
  constructor(x, y, height, width, color, dx, dy){
    super(x, y, height, width, color, dx, dy);
    // this.score = score;
    // this.lives = lives
    this.tail = [];
  }
}


module.exports = Snake;