import React from 'react';
import styled from 'styled-components';
import StyledSpan from './StyledSpan';


const Button = styled.button`
color: white;
display: inline-block;
padding: .4em .67em;
text-align: center;
font-size: 15px;
border: 1px solid transparent;
border-radius: 5px;
white-space: normal;
line-height: 1.5;
background: rgb(0,106,255);
${StyledSpan}: hover & {
  cursor: pointer;

}
`;
Button.displayName = 'btn';

const Send = (props) => {
  const { close, children } = props;
  return (
    <StyledSpan>
      <Button onClick={close}>{ children }</Button>
    </StyledSpan>
  );
};

export default Send;
