import Frame, { FRAME_TYPE_NORMAL, FRAME_TYPE_STRIKE, FRAME_TYPE_SPARE } from './frame';

class Game {
  constructor() {
    this.frames = [];
    this.currentFrame = 0;
  }
  updateBonusScore() {
    const currentFrame = this.getFrame(this.currentFrame);
    const oneFrameBack = this.getFrame(this.currentFrame - 1);
    const twoFramesBack = this.getFrame(this.currentFrame - 2);

    if (oneFrameBack === null) {
      // No previous frames, no bonus points to set
      return;
    }
    // Previous frame was a strike = add both rolls to the result
    if (oneFrameBack.type === FRAME_TYPE_STRIKE) {
      oneFrameBack.bonusPoints =
        currentFrame.roll1 + currentFrame.roll2;
    }
    // Previous frame was a spare - add the current first roll as bonus ball
    if (oneFrameBack.type === FRAME_TYPE_SPARE) {
      oneFrameBack.bonusPoints += currentFrame.roll1;
    }
    // Check if previous two frames have been strikes, then add first roll from current to bonus score
    if (twoFramesBack !== null && twoFramesBack.type === FRAME_TYPE_STRIKE
      && twoFramesBack.type === FRAME_TYPE_STRIKE
    ) {
      twoFramesBack.bonusPoints += currentFrame.roll1;
    }
  }

  // Helper function to extract frames from frames array
  getFrame(frameNumber) {
    if (frameNumber < 1 || frameNumber > this.currentFrame) {
      return null;
    }
    return this.frames[frameNumber - 1];
  }

  addFrame(roll1, roll2) {
    const newFrame = new Frame(roll1, roll2);
    this.frames.push(newFrame);
    this.currentFrame++;
    this.updateBonusScore();


  }


}
export default Game;
