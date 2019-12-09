/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import DateButton from './DateButton';
import CarouselButton from './CarouselButton';

const Div = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

const DateButtonList = (props) => {
  const {
    dates, currentDate, clickDate, SwitchLeft, SwitchRight,
  } = props;
  return (
    <Div>
      <CarouselButton Switch={SwitchLeft} img="https://img.icons8.com/android/24/000000/back.png" alt="back, previous button" />
      {dates.map((date) => <DateButton date={date} key={date} currentDate={currentDate} clickDate={clickDate} />)}
      <CarouselButton Switch={SwitchRight} img="https://img.icons8.com/android/24/000000/forward.png" alt="next, forward button" />
    </Div>
  );
};


export default DateButtonList;
