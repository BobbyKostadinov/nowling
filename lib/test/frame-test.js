import Frame from './../frame';
import should from 'should';

describe('Frame Model', function() {
  let frame;

  it('should new frame have roll1 and roll 2 set as per constructor', () => {
    frame = new Frame(9, 1);
    frame.roll1.should.eql(9);
    frame.roll2.should.eql(1);
  });

  it('should set as type=strike when roll1 is 10', () => {
    frame = new Frame(10, 0);
    frame.type.should.eql('strike');
  });

  it('should set as type=spare when roll1 + roll 2 is 10', () => {
    frame = new Frame(5, 5);
    frame.type.should.eql('spare');
  });

  it('should set as type=normal when roll1 + roll2 is less than 10', () => {
    frame = new Frame(5, 4);
    frame.type.should.eql('normal');
  });

  it('should throw error when roll is greater than 10', (done) => {
    try {
      frame = new Frame(6, 5);
      done('Error not thrown as epected');
    } catch (e) {
      done();
    }

  });
});
