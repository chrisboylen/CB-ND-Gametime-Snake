var GamePiece = require('./GamePiece.js');
var Food = require('./Food.js');

class Snake extends GamePiece {
  constructor(x, y, height = 10, width = 10, color, dx, dy){
    super(x, y, height, width, color, dx, dy);
    this.head = null;
    this.tail = [];
    // this.move = this.move.bind(this);
  };

  checkDirection(dxv,dyv){
    this.dxv = x;
    this.dxv = y;
  };
  
  move(){
    this.x += this.dx * this.dxv;
    this.y += this.dy * this.dxv;
  }

  eat() {
    if (snake.isCollidingWith(food)) {
      console.log(snap)
    }
  }
  
}

module.exports = Snake;