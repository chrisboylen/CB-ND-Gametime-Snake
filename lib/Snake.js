var GamePiece = require('./GamePiece.js');
// var Food = require('./Food.js');

class Snake extends GamePiece {
  constructor(x, y, height = 10, width = 10, color, dx, dy){
    super(x, y, height, width, color, dx, dy);
    this.dx = 1; 
    this.dy = 0; 
    this.head = null;
    this.tail = [];
    this.lives = 3;
    this.score = 0;
  };

  checkDirection(dxv){
    this.dxv = x;
    this.dxv = y;
  };
  
  move(){
    this.x += this.dx * this.dxv;
    this.y += this.dy * this.dxv;
    // this.eatFood();
  };

  scorePoint() {
    this.score += 1;
  };
  
  death() {
    this.lives = this.lives - 1
    if (this.lives < 0) {
      this.lives = 0;
    }
  }
}

module.exports = Snake;