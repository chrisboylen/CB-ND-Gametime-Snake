module.exports = class GamePiece {
  constructor(x, y, height = 20, width = 20, color = 'brown') {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
  }

  isCollidingWith(object) {
    return !(
      this.x + this.width  < object.x -5||
      this.y + this.height  < object.y -5 ||
      this.x > object.x -5 + object.width ||
      this.y > object.y -5 + object.height
    );
  }

  draw(context) {
    const { x, y, height, width, color } = this;

    context.fillStyle = color;
    context.beginPath();
    context.fillRect(x, y, width, height);
    context.closePath();
  };
};

