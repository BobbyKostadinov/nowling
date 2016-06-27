import Game from './../game';
import should from 'should';
import {stub} from 'sinon';

describe('Game Model', function() {
  let game;
  let Frame;
  let frame;
  beforeEach(() => {
    frame = stub({type: 'strike', roll1: 0, roll2: 0});
    Frame = () => frame;
    Game.__Rewire__('Frame', Frame);
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

  it('should addFrame push extra items to the frames array', () => {
    game.addFrame(1, 1);
    game.frames.length.should.eql(1);
  });

  it('should addFrame move the currentFrame counter', () => {
    game.addFrame(1, 1);
    game.currentFrame.should.eql(1);
  });
});
