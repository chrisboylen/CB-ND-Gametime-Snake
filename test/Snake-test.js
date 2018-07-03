const { expect } = require('chai');
const Snake = require('../lib/Snake.js');

describe('Snake', () => {
  let snake;

  beforeEach(() => {
   snake = new Snake(50, 50, 10, 10, "green", 1, 1.5);
  });
  
  it('Should exist', () => {
    expect(snake).to.exist;
    expect(snake).to.be.an.instanceOf(Snake);
  });

  it('Should set instance properties', () => {
    expect(snake).to.deep.equal(snake, {
      x: 50,
      y: 50,
      height: 10,
      width: 10,
      color: "green",
      dx: 1,
      dxv: 1.5
    })
  })

  it('Should be able to make the first part of the snake', () => {
    snake.makeInitialSnake();
    const expectedState = 4
    const actualState = snake.tail.length

    expect(actualState).equal(expectedState);
  })

  it('Should be able to move left', () => {
    snake.move('left');

    const expectedState = snake.head.x - 20
    const actualState = snake.newTail.x

    expect(actualState).toEqual(expectedState);
  })

  // 
});