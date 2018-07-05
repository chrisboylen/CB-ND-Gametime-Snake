var GamePiece = require('./GamePiece.js');

class Food extends GamePiece {
  constructor(x, y, height, width, color) {
    super(x, y, height, width, color);
    this.x = x;
    this.y = y;
  }

  createFood() {

    this.x = (Math.floor(Math.random() * 30) * 20);
    this.y = (Math.floor(Math.random() * 30) * 20);
  }
}

    
    
 

module.exports = Food;