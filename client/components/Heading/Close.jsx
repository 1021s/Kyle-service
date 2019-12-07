import React from 'react';
import styled from 'styled-components';
import StyledSpan from './StyledSpan';


const StyledSpann = styled(StyledSpan)`
float: right;
`;

const Button = styled.button`
background: white;
color: rgb(108,108,113);
border: none;
font-size: 20px;
${StyledSpan}: hover & {
    color: rgba(0,106,255, 0.5);
    cursor: pointer;
}
`;

const Close = (props) => {
  const { close } = props;
  return (
    <StyledSpann>
      <Button onClick={() => close()}>X</Button>
    </StyledSpann>
  );
};


export default Close;
