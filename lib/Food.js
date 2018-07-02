var GamePiece = require('./GamePiece.js');

class Food extends GamePiece {
  constructor(x, y, height = 20, width = 20, color) {
    super(x, y, height = 20, width = 20, color);
    this.x = x;
    this.y = y;
    this.color = 'red';
  }

  createFood() {

    this.x = (Math.floor(Math.random() * 30) * 20);
    this.y = (Math.floor(Math.random() * 30) * 20);
  };

  // drawFood (context) {
  //   const { x, y, height, width, color } = this;
  //   context.fillStyle = color;
  //   context.fillRect(x, y, height, width);
  //   if ()
  // }
};

    
    
 

module.exports = Food;