import React from 'react';
import styled from 'styled-components';


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
background: rgb(23, 176, 54);
color: white;
padding: 15px;
text-align: center;
margin: 4px 3px;
font-size: 15px;
border: 0.5px solid rgb(201, 201, 204);
border-radius: 4px;
`;

const DateButton = (props) => {
  const { clicked, day, date } = props;
  if (clicked) {
    return (
      <ClickedButton>
        <b>WED</b>
        <br />
        <br />
        Dec 4
      </ClickedButton>
    );
  }
  return (
    <Button>
      <b>WED</b>
      <br />
      <br />
        Dec 4
    </Button>
  );
};

export default DateButton;
