const { expect } = require('chai');
const Game = require('../lib/Game.js');
const Snake = require('../lib/Snake.js');
const Food = require('../lib/Food.js');

describe('Game', () => {
  let game;
  let snake;
  let food;
  beforeEach(() => {
    game = new Game(context, false, 0, 0, snake = new Snake(50, 50, 10, 10, 'rgb(255, 0, 0)', 1), food = new Food(150, 10, 10, 10, 'rgb(0, 255, 0)'));
  });

  it('Should exist', () => {
    expect(game).to.exist;
    expect(game).to.be.an.instanceOf(Game);
  });

  it('Should set instance properties', () => {
    const actualState = game;
    const expectedState = {
      context: context,
      gameOver: false,
      score: 0,
      highScore: 0,
      snake: new Snake(50, 50, 20, 20, 'rgb(255, 0, 0)', 1),
      food: new Food(150, 10, 18, 18, 'rgb(0, 255, 0)')
    }

    expect(actualState).to.deep.equal(expectedState);
  });

  it('Should should have a eatFood method that does not eat', () => {
    const eatFood = snake.isCollidingWith(food);

    const actualState = eatFood;
    const expectedState = false; 

    expect(actualState).to.deep.equal(expectedState);
  });
});