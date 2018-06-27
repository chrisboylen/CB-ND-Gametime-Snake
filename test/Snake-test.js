const { expect } = require('chai');
const Snake = require('../lib/Snake.js');

describe('GamePiece', () => {
  let snake = new Snake(50, 50, 10, 10, "green", 1, 1.5);
  

  it('Should exist', () => {
    expect(snake).to.exist;
    expect(snake).to.be.an.instanceOf(Snake);
  });

});