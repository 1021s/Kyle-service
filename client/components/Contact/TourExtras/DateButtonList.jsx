/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import DateButton from './DateButton';

const Div = styled.div`
display: inline-block;
text-align: center;
`;

const DateButtonList = (props) => {
  const { dates, currentDate, clickDate } = props;
  return (
    <Div>
      {dates.map((date) => <DateButton date={date} key={date} currentDate={currentDate} clickDate={clickDate} />)}
    </Div>
  );
};


export default DateButtonList;
