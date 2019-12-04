import React from 'react';
import styled from 'styled-components';


const StyledSpan = styled.span`
`;

const Button = styled.button`
background: white;
color: rgb(0,106,255);
padding: 15px;
text-align: center;
font-size: 15px;
border: none;
${StyledSpan}: hover & {
    color: rgba(0,106,255, 0.5);
};
`;

const Save = (props) => (
  <StyledSpan>
    <Button>Heart: Save</Button>
  </StyledSpan>
);


export default Save;
