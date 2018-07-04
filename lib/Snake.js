var GamePiece = require('./GamePiece.js');

class Snake extends GamePiece {
  constructor(x, y, height = 20, width = 20, color, dx, dy, dxv) {
    super(x, y, height, width, color, dx, dy, dxv);
    this.dx = dx; 
    this.dy = dy; 
    this.dxv = dxv;
    this.head = null;
    this.tail = [];
    this.newTail = this.tail[0];
    this.lives = 3;
    this.direction = 'right';
    this.dead = false;
  }

  makeInitialSnake() {
    for (let i = 20; i < 100; i += 20) {
      let block = new GamePiece(i, 20);

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
  }

  changeDirection(changeDirection) {
    if (changeDirection != this.direction) {
      this.direction = changeDirection;
    }
  }

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
 
  checkInBounds() {
    if (this.head.x + 20 === 0 || this.head.x - 20 === 600) {
      this.dead = true;
    } else if (this.head.y + 20 === 0 || this.y - 20 === 600) {
     this.dead = true;
    }
  }

  checkEatItself(context) {
    for (let i = 0; i < this.tail.length - 2; i++) {
      if (this.head.x === this.tail[i].x &&
        this.head.y === this.tail[i].y) {
        context.clearRect(0, 0, 600, 600);
        this.dead = true;
      }
    }
  }
}

module.exports = Snake;