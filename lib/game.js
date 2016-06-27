import Frame from './frame';

class Game {
  constructor() {
    console.log(Frame);
    this.frames = [];
    this.currentFrame = 0;
  }
  updateFramesScore() {

  }

  addFrame(roll1, roll2) {
    this.frames.push(new Frame(roll1, roll2));
    this.currentFrame++;
  }
}
export default Game;
