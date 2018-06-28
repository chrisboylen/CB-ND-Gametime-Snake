const { expect } = require('chai');
const Game = require('../lib/Game.js');

describe('Game', () => {
  let game;

  beforeEach(() => {
    game = new Game(context);
  });

  it('Should exist', () => {
    expect(game).to.exist;
    expect(game).to.be.an.instanceOf(Game);
  });

  ir('Should st')
});