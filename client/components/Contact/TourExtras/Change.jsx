import React from 'react';
import styled from 'styled-components';

const StyledSpan = styled.span``;

const P = styled.p`
cursor: pointer;
font-size: 12px;
font-weight: 300;
color: #006AFF;
${StyledSpan}: hover & {
    color: #62aef7;
}
`;

const Change = (props) => (
  <StyledSpan onClick={() => props.onClick()}>
    <P>change</P>
  </StyledSpan>
);

export default Change;
