/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Moment from 'moment';


const Button = styled.button`
background: white;
color: black;
padding: 15px;
text-align: center;
margin: 4px 3px;
font-size: 15px;
border: 0.5px solid rgb(201, 201, 204);
border-radius: 4px;
`;

const ClickedButton = styled.button`
background: #17B036;
color: white;
padding: 15px;
text-align: center;
margin: 4px 3px;
font-size: 15px;
border: 0.5px solid rgb(201, 201, 204);
border-radius: 4px;
`;

const DateButton = (props) => {
  const {
    currentDate, date, clickDate,
  } = props;
  const day = date.format('ddd');
  const month = date.format('MMM');
  if (currentDate === date.get('date')) {
    return (
      <ClickedButton onClick={() => clickDate(date.get('date'))}>
        <b>{day.toString().toUpperCase()}</b>
        <br />
        <br />
        {month}
        {' '}
        {date.get('date')}
      </ClickedButton>
    );
  }
  return (
    <Button onClick={() => clickDate(date.get('date'))}>
      <b>{day.toString().toUpperCase()}</b>
      <br />
      <br />
      {month}
      {' '}
      {date.get('date')}
    </Button>
  );
};

DateButton.propTypes = {
  currentDate: PropTypes.number.isRequired,
};

export default DateButton;
