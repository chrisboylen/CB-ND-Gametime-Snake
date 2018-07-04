const { expect, assert } = require('chai');
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

  it('Should be able to change direction to up', () => {
    snake.changeDirection('up');

    const expectedState = 'up';
    const actualState = snake.changeDirection('up')

    expect(actualState).equal(expectedState);
  })
  
  it('Should be able to add to snake when eats food', () => {
    const oldLength = snake.tail.length;
    const newLength = oldLength.growSnake(this.direction = 'right');

    const expectedState = newLength;
    const actualState = snake.tail[0] -20;

    expect(actualState).equal(expectedState);
  })

  it('Should reduce lives when snake dies', () => {
    const lives = snake.lives;
    const expectedState = 2;
    snake.death();
    const actualState = snake.lives;

    expect(actualState).equal(expectedState);
  })

  it('Should be able to dies if snake goes out of bounds', () => {
    

    expect(actualState).equal(expectedState);
  })
});