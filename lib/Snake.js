var GamePiece = require('./GamePiece.js');
// var Food = require('./Food.js');

class Snake extends GamePiece {
  constructor(x, y, height = 20, width = 20, color, dx, dy, dxv) {
    super(x, y, height, width, color, dx, dy, dxv);
    this.dx = dx; 
    this.dy = dy; 
    this.dxv = dxv;
    this.head = null;
    this.tail = [];
    this.totalTail = 4;
    this.lives = 3;
    this.direction = 'right';
    // this.gamePiece = new GamePiece(50, 50, 20, 20, 'rgb(255, 0, 0)');
  }

  makeInitialSnake() {
    for (let i = 20; i < 80; i += 20) {
      let block = new GamePiece(i, 20)

      this.tail.push(block);
    }
    return this;
  }

  drawSnakeBody(context) {
    this.tail.forEach((block) => {
      block.draw(context);
    });
  }

  move() {
    this.newTail = this.tail.shift();
    this.head = this.tail[this.tail.length - 1];
    
    switch (this.direction) {
      case 'left':
        this.newTail.x = this.head.x - 20;
        this.newTail.y = this.head.y;
        break;
      case 'up':
        this.newTail.y = this.head.y - 20;
        this.newTail.x = this.head.x;
        break;
      case 'right':
        this.newTail.x = this.head.x + 20;
        this.newTail.y = this.head.y;
        break;
      case 'down':
        this.newTail.y = this.head.y + 20;
        this.newTail.x = this.head.x;
        break;
    }
    this.tail.push(this.newTail);
    return this;
    // this.x += this.dx * this.dxv;
    // this.y += this.dy * this.dxv;
  };

  increaseLevel() {
    this.dxv = this.dxv + .2;
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

  growSnake() {
    let currentTail = this.tail[0];

    switch (this.changeDirection) {
      case 'left': 
        x = currentTail.x + 20;
        y = currentTail.y;
        break;
      case 'up': 
        x = currentTail.x;
        y = currentTail.y + 20; 
        break;
      case 'right': 
        x = currentTail.x - 20;
        y = currentTail.y;
        break;
      case 'down': 
        x = currentTail.x;
        y = currentTail.y - 20;
        break;
    }
    let newBlock = new GamePiece(currentTail.x, currentTail.y, 20, 20);
    this.tail.unshift(newBlock);
    return this;
  }
  
  death(context) {
    this.lives = this.lives - 1
    if (this.lives < 0) {
      this.lives = 0;
      this.dxv = 0;
    }
    this.makeInitialSnake();
  }

  checkInBounds(context) {
    if (this.head.x < 0 || this.head.x > 600 + this.head.width || this.head.y < 0 || this.y > 600 - this.height) {
      context.clearRect(0, 0, 600, 600);
      this.death();
    }
  }
}

module.exports = Snake;