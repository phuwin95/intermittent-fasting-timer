import styled from 'styled-components';
import React, { useState } from 'react';
import Input from './Input';
import { calculateTimer } from '../utils';

const Result = styled.div`
  background: #bd2013;
  color: yellowgreen;
  border-radius: 50%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: auto;
  font-weight: bold;
  font-size: 3rem;
  height: 200px;
  width: 200px;
`;

const DayString = styled.div`
  text-align:center;
`;

const InputContainer = styled.div`
  text-align: center;
  input {
    display: block;
    width: 100px;
    margin: 5px auto;
  }
`;

const Timer = () => {
  const [time, setTime] = useState('20:00');
  const [period, setPeriod] = useState(16);
  const onTimeChange = (e) => {
    setTime(e.target.value);
  };
  const onPeriodChange = (e) => {
    const hour = e.target.value;
    setPeriod(hour > 24 ? 24 : hour);
  };
  const result = calculateTimer(time, period);
  return (
    <div>
      <InputContainer>
        Your previous meal at
        <Input type="time" value={time} handleChange={onTimeChange} />
      </InputContainer>
      <InputContainer>
        Fasting period (hour)
        <Input value={period} type="number" handleChange={onPeriodChange} />
        <br />
        You can eat:
      </InputContainer>
      <Result>{result.time}</Result>
      <DayString>{result.dayString}</DayString>
    </div>
  );
};

export default Timer;
