import Game from './../game';
import should from 'should';

describe('Game Model', function() {
  let game;
  beforeEach(() => {
    game = new Game();
  });

  it('should new game have currentFrame set to 0', () => {
    game.currentFrame.should.eql(0);
  });

  it('should new game have frames property that is an empty array', () => {
    game.frames.should.eql([]);
  });

  it('should have method updateFramesScore', () => {
    (typeof game.updateFramesScore === 'function').should.eql(true);
  });

  it('should have method addFrame', () => {
    (typeof game.addFrame === 'function').should.eql(true);
  });
});
