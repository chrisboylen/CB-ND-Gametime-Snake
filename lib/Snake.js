var GamePiece = require('./GamePiece.js');
// var Food = require('./Food.js');

class Snake extends GamePiece {
  constructor(x, y, height = 10, width = 10, color, dx, dy){
    super(x, y, height, width, color);
    this.dx = dx; //controls direction: 1 === right, -1 === left, 0 === stop;
    this.dy = dy; //controls direction: 1 === up, -1 === down, 0 === stop;
    this.dxv = 1.5; //velocity/speed (don't do negative numbers here); (SET A NEGATIVE FOR MIRROR MODE DIFFICULTY)
    this.head = null;
    this.tail = [];
    // this.move = this.move.bind(this);
  };

  checkDirection(dxv){
    this.dxv = x;
  };
  
  move(){
    this.x += this.dx * this.dxv;
    this.y += this.dy * this.dxv;
    // this.eatFood();
  }

  // eatFood() {
  //   if (this.isCollidingWith(food)) {
  //     food.draw(context)
  //     console.log(snap)
  //   }
  // }
  
}

module.exports = Snake;