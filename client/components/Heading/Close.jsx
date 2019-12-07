import React from 'react';
import styled from 'styled-components';
import StyledSpan from './StyledSpan';

{/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="32" height="32"
viewBox="0 0 172 172"
style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill-opacity="0.5" fill="#006aff"><path d="M46.86328,39.13672l-7.72656,7.72656l39.13672,39.13672l-39.13672,39.13672l7.72656,7.72656l39.13672,-39.13672l39.13672,39.13672l7.72656,-7.72656l-39.13672,-39.13672l39.13672,-39.13672l-7.72656,-7.72656l-39.13672,39.13672z"></path></g></g></svg> */}
// img for hover close button
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
      <Button onClick={() => close()}>
        <img src="https://img.icons8.com/windows/32/000000/multiply.png" alt="close" />
      </Button>
    </StyledSpann>
  );
};


export default Close;
