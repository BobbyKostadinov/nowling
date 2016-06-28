import Game from './../game';
import should from 'should';
import { stub, spy } from 'sinon';

describe('Game Model', function() {
  let game;
  let Frame;
  let frame;
  beforeEach(() => {
    Frame = (roll1, roll2) => {
      return { roll1: 1, roll2: 1, bonusPoints: 0, type: 'strike' };
    };
    Game.__Rewire__('Frame', Frame);
    game = new Game();
  });

  it('should new game have currentFrame set to 0', () => {
    game.currentFrame.should.eql(0);
  });

  it('should new game have frames property that is an empty array', () => {
    game.frames.should.eql([]);
  });

  it('should have method updateBonusScore', () => {
    (typeof game.updateBonusScore === 'function').should.eql(true);
  });

  it('should have method addFrame', () => {
    (typeof game.addFrame === 'function').should.eql(true);
  });

  it('should addFrame push extra items to the frames array', () => {
    game.addFrame(1, 1);
    game.frames.length.should.eql(1);
  });

  it('should addFrame move the currentFrame counter', () => {
    game.addFrame(1, 1);
    game.currentFrame.should.eql(1);
  });

  it('should getFrame return frame 2 - index 1 in the game object array', () => {
    game.addFrame(1, 1);
    game.addFrame(1, 1);
    game.frames[1].roll1 = 10;
    const result = game.getFrame(2);
    (result.roll1 === 10).should.eql(true);
  });

  it('should getFrame return null when no frames were added', () => {
    const result = game.getFrame(2);
    (result === null).should.eql(true);
  });

  it('should getFrame return null when requesting too high frame', () => {
    game.addFrame(1, 1);
    const result = game.getFrame(2);
    (result === null).should.eql(true);
  });

  it('should updateBonusScore not set any bonus points when frame is the first one', () => {
    game.addFrame(1, 1);
    game.frames[0].bonusPoints.should.eql(0);
  });

  it('should updateBonusScore backtrack to set bonus when first roll was a strike with 2 frames', () => {
    game.addFrame(10, 0);
    game.addFrame(1, 1);
    game.frames[0].bonusPoints.should.eql(2);
  });

  it('should updateBonusScore backtrack to set bonus when first roll was a spare with 2 frames', () => {
    game.addFrame(10, 0);
    game.frames[0].type = 'spare';
    game.addFrame(1, 1);

    game.frames[0].bonusPoints.should.eql(1);
  });
});
