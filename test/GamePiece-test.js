const { expect } = require('chai');
const GamePiece = require('../lib/GamePiece.js');

describe('GamePiece', () => {
  let gamePiece;

  beforeEach(() => {
    gamePiece = new GamePiece(50, 50, 10, 10, "green", 1, 1.5);
  });

  it('Should exist', () => {
    expect(gamePiece).to.exist;
    expect(gamePiece).to.be.an.instanceOf(GamePiece);
  });

  it('Should set instance properties', () => {
    expect(gamePiece).to.deep.equal(gamePiece, {
      x: 50,
      y: 50,
      height: 10,
      width: 10,
      color: "green",
      dx: 1,
      dxv: 1.5
    });
    
  });

  it('Should have a isCollidingWith method', () => {
    const gamePiece2 = new GamePiece(50, 58, 10, 10, "green", 1, 1.5)

    const isColliding = gamePiece.isCollidingWith(gamePiece2);
    expect(isColliding).to.be.true;
  });

  it('Should have a isCollidingWith method', () => {
    const gamePiece2 = new GamePiece(65, 65, 10, 10, "green", 1, 1.5)

    const isColliding = gamePiece.isCollidingWith(gamePiece2);
    expect(isColliding).to.be.false;
  });
});