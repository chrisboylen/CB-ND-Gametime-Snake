var GamePiece = require('./GamePiece.js');
// var Food = require('./Food.js');

class Snake extends GamePiece {
  constructor(x, y, height = 20, width = 20, color, dx, dy, dxv){
    super(x, y, height, width, color, dx, dy, dxv);
    this.dx = 1; 
    this.dy = 0; 
    this.dxv = .5;
    this.head = null;
    this.tail = [];
    this.lives = 3;
    this.score = 0;
    this.direction = 'right';
  };

  move(){
    let newTail = this.tail.shift();
    this.head = this.tail[this.tail.length - 1];
    switch (this.changeDirection) {
      case 'left':
        this.offSethead(-20, 0, newTail, this.head);
        break;
      case 'up':
        this.offSethead(0, -20, newTail, this.head);
        break;
      case 'right':
        this.offSethead(+20, 0, newTail, this.head);
        break;
      case 'down':
        this.offSethead(0, +20, newTail, this.head);
        break;
    }
    this.tail.push(newTail);

    // this.x += this.dx * this.dxv;
    // this.y += this.dy * this.dxv;
  };

  scorePoint() {
    this.score += 1;
  };

  increaseLevel() {
    this.dxv = this.dxv + .2;
  }

  drawSnakeBody(context) {
    this.tail.forEach((block) => {
      block.draw(context);
    })
  }

  setOffset(xOffSet, yOffSet, currentTail) {
    currentTail.x += xOffSet;
    currentTail.y += yOffSet;
    return this;
  }

  changeDirection(changeDirection) {
    if (changeDirection != this.direction) {
      this.direction = changeDirection;
    }
  };

  offSethead(xOffSet, yOffSet, currentTail, head) {
    currentTail.x = head.x += xOffSet;
    currentTail.y = head.y += yOffSet;
    return this;
  }


  growSnake() {
    let currentTail = this.tail[0];

    switch (this.changeDirection) {
      case 'left': this.setOffset(-20, 0, currentTail) 
        break;
      case 'up': this.setOffset(0, -20, currentTail) 
        break;
      case 'right': this.setOffset(20, 0, currentTail) 
        break;
      case 'down': this.setOffset(0, 20, currentTail) 
        break;
    }
    let newBlock = new GamePiece(currentTail.x, currentTail.y, 20, 20);
    this.tail.unshift(newBlock);
  }
  
  death() {
    this.lives = this.lives - 1
    if (this.lives < 0) {
      this.lives = 0;
      this.dxv = 0;
      // context.clearRect(0, 0, window.width, window.height);
    }
  }

  // checkInBounds(canvas, context) {
  //   if (this.x < 0 || this.x > canvas.width - this.width || this.y < 0 || this.y > canvas.height - this.height) {
  //     this.death();
  //     console.log(this.death)
  //     this.context.clearRect(0, 0, canvas.width, canvas.height);
  //     this.draw(context)
  //   }
  // };
}

module.exports = Snake;