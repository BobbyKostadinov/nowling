const FRAME_TYPE_NORMAL = 'normal';
const FRAME_TYPE_STRIKE = 'strike';
const FRAME_TYPE_SPARE = 'spare';

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
    this.roll1 = roll1;
    this.roll2 = roll2;
    this.type = detectType(roll1, roll2);
    this.bonusPoints = 0;
  }
}

export default Frame;
