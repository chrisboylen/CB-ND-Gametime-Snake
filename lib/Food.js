var GamePiece = require('./GamePiece.js');

class Food extends GamePiece {
  constructor(x, y, height = 18, width = 18, color) {
    super(x, y, height = 18, width = 18, color);
    this.x = x;
    this.y = y;
    this.color = 'red';
  };

  createFood() {
    this.x = (Math.floor(Math.random() * 22) * 18);
    this.y = (Math.floor(Math.random() * 33) * 18);
  };

  // drawFood (context) {
  //   const { x, y, height, width, color } = this;
  //   context.fillStyle = color;
  //   context.fillRect(x, y, height, width);
  //   if ()
  // }
};

module.exports = Food;