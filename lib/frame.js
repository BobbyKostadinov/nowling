export const FRAME_TYPE_NORMAL = 'normal';
export const FRAME_TYPE_STRIKE = 'strike';
export const FRAME_TYPE_SPARE = 'spare';

function detectType(roll1, roll2) {
  if (roll1 + roll2 > 10) {
    throw new Error('Invalid frame roll total');
  }
  if (roll1 == 10) {
    return FRAME_TYPE_STRIKE;
  }
  if (roll1 + roll2 === 10) {
    return FRAME_TYPE_SPARE;
  }

  return FRAME_TYPE_NORMAL;
}

class Frame {
  constructor(roll1, roll2) {
    this.roll1 = roll1 || 0;
    this.roll2 = roll2 || 0;
    this.type = detectType(roll1, roll2);
    this.bonusPoints = 0;
  }
  getScore() {
    return this.roll1 + this.roll2 + this.bonusPoints;
  }
}

export default Frame;
