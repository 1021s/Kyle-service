import React from 'react';
import styled from 'styled-components';


const StyledSpan = styled.span`
`;

const Button = styled.button`
background: white;
color: rgb(0,106,255);
padding: 15px 15px 15px 0px;
text-align: center;
font-size: 15px;
border: none;
${StyledSpan}: hover & {
    color: rgba(0,106,255, 0.5);
    cursor: pointer;
};
`;

const Save = (props) => (
  <StyledSpan>
    <img src="https://img.icons8.com/ultraviolet/40/000000/hearts.png" alt="heart" height="20px" width="20px" />
    <span>
      <Button>Save</Button>
    </span>
  </StyledSpan>
);


export default Save;
