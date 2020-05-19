import React, { useState } from 'react';
import Input from './Input';
import { calculateTimer } from '../utils';

const Timer = () => {
  const [time, setTime] = useState('20:00');
  const [period, setPeriod] = useState(16);
  const onTimeChange = (e) => {
    setTime(e.target.value);
  };
  const onPeriodChange = (e) => {
    setPeriod(e.target.value);
  };
  return (
    <div>
      <Input type="time" value={time} handleChange={onTimeChange} />
      <Input value={period} type="number" handleChange={onPeriodChange} />
      <div>
        You can eat:
      </div>
      <div>
        {calculateTimer(time, period)}
      </div>
    </div>
  );
};

export default Timer;
