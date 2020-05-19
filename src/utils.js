export const formatTime = (time) => (Number(time) > 9 ? time : `0${time}`);
export const calculateTimer = (whenEaten, fastPeriod) => {
  const eatenDate = new Date();
  const [hours, minutes] = whenEaten.split(':');
  eatenDate.setHours(hours);
  eatenDate.setMinutes(minutes);
  eatenDate.setSeconds(0);
  const timeCanEat = new Date(eatenDate);
  const fastPeriodInMilliseconds = fastPeriod * 60 * 60 * 1000;
  timeCanEat.setTime(timeCanEat.getTime() + fastPeriodInMilliseconds);
  const dayString = timeCanEat.getDay() !== eatenDate.getDay() ? 'the next day' : 'the same day';
  const canEatHours = formatTime(timeCanEat.getHours());
  const canEatMinutes = formatTime(timeCanEat.getMinutes());
  const time = `${canEatHours}:${canEatMinutes}`;
  const result = `${time} ${dayString}`;
  return result;
};
