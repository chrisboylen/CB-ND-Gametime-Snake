import { truncate } from 'fs/promises';

const { expect, assert } = require('chai');
const Snake = require('../lib/Snake.js');

describe('Snake', () => {
  let snake;

  beforeEach(() => {
   snake = new Snake(50, 50, 20, 20, "green");
  });
  
  it('Should exist', () => {
    expect(snake).to.exist;
    expect(snake).to.be.an.instanceOf(Snake);
  });

  it('Should set instance properties', () => {
    expect(snake).to.deep.equal(snake, {
      x: 50,
      y: 50,
      height: 20,
      width: 20,
      color: "green",
    })
  })

  it('Should be able to make the first part of the snake', () => {
    snake.makeInitialSnake();
    const expectedState = 4
    const actualState = snake.tail.length

    expect(actualState).equal(expectedState);
  })

  it('Should be able to move left', () => {
    
    snake.makeInitialSnake();
    const newTail = snake.tail.shift();
    snake.move('left');

    const expectedState = 20;
    const actualState = newTail.x;
    expect(actualState).equal(expectedState);
  })

  it('Should be able to move up', () => {
    
    snake.makeInitialSnake();
    const newTail = snake.tail.shift();
    snake.move('up');

    const expectedState = 20;
    const actualState = newTail.y;
    expect(actualState).equal(expectedState);
  })

  it('Should be able to move down', () => {
    
    snake.makeInitialSnake();
    const newTail = snake.tail.shift();
    snake.move('down');

    const expectedState = 20;
    const actualState = newTail.y;
    expect(actualState).equal(expectedState);
  })

  it('Should be able to move right', () => {
    
    snake.makeInitialSnake();
    const newTail = snake.tail.shift();
    snake.move('right');

    const expectedState = 20;
    const actualState = newTail.x;
    expect(actualState).equal(expectedState);
  })

  it('Should start with a length of four', () => {
    snake.makeInitialSnake();
    const expectedState = 4;
    const actualState = snake.tail.length;

    expect(actualState).equal(expectedState);
  })


  it('Should be able to die if snake goes out of bounds', () => {
    snake.makeInitialSnake();
    snake.checkInBounds(true);
    const head = snake.tail[snake.tail.length - 1]

    const expectedState = true
    const actualState = snake.dead;
    expect(actualState).equal(expectedState);
  })

  
});