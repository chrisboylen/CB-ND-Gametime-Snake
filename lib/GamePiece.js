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
      this.x + this.width < object.x ||
      this.y + this.height < object.y ||
      this.x > object.x + object.width || 
      this.y > object.y + object.height
    );
  }

  draw(context) {
    const { x, y, height, width, color } = this;
    context.fillStyle = color;
    context.fillRect(x, y, width, height);
  };
};

