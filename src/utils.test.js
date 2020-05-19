import { calculateTimer, formatTime } from './utils';

describe('Calculate timer function', () => {
  it('should return correct time', () => {
    const whenEaten = '20:00';
    const fastPeriod = 16;
    expect(calculateTimer(whenEaten, fastPeriod)).toBe('12:00 the next day');
  });
});
describe('formatTime timer function', () => {
  it('should return correct time', () => {
    const input = 2;
    expect(formatTime(input)).toBe('02');
  });
  it('should return correct time also when input is a string ', () => {
    const input = '3';
    expect(formatTime(input)).toBe('03');
  });
});
