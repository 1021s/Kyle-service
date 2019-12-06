import React from 'react';
import styled from 'styled-components';
import StyledSpan from './StyledSpan';


const Button = styled.button`
background: white;
color: rgb(0,106,255);
padding: 15px 0px;
text-align: center;
font-size: 15px;
border: none;
${StyledSpan}: hover & {
    color: rgba(0,106,255, 0.5);
};
`;

const Box = styled.span`
display: inline-block;
`;

const More = (props) => (
  <StyledSpan>
    <Box>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="20"
        height="20"
        viewBox="0 0 172 172"
        style={{ fill: '#000000' }}
      >
        <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
          <path d="M0,172v-172h172v172z" fill="none" />
          <g fill="#006aff"><path d="M27.52,68.8c-11.35469,0 -20.64,9.28531 -20.64,20.64c0,11.35469 9.28531,20.64 20.64,20.64c11.35469,0 20.64,-9.28531 20.64,-20.64c0,-11.35469 -9.28531,-20.64 -20.64,-20.64zM86,68.8c-11.35469,0 -20.64,9.28531 -20.64,20.64c0,11.35469 9.28531,20.64 20.64,20.64c11.35469,0 20.64,-9.28531 20.64,-20.64c0,-11.35469 -9.28531,-20.64 -20.64,-20.64zM144.48,68.8c-11.35469,0 -20.64,9.28531 -20.64,20.64c0,11.35469 9.28531,20.64 20.64,20.64c11.35469,0 20.64,-9.28531 20.64,-20.64c0,-11.35469 -9.28531,-20.64 -20.64,-20.64zM27.52,75.68c7.64594,0 13.76,6.11406 13.76,13.76c0,7.64594 -6.11406,13.76 -13.76,13.76c-7.64594,0 -13.76,-6.11406 -13.76,-13.76c0,-7.64594 6.11406,-13.76 13.76,-13.76zM86,75.68c7.64594,0 13.76,6.11406 13.76,13.76c0,7.64594 -6.11406,13.76 -13.76,13.76c-7.64594,0 -13.76,-6.11406 -13.76,-13.76c0,-7.64594 6.11406,-13.76 13.76,-13.76zM144.48,75.68c7.64594,0 13.76,6.11406 13.76,13.76c0,7.64594 -6.11406,13.76 -13.76,13.76c-7.64594,0 -13.76,-6.11406 -13.76,-13.76c0,-7.64594 6.11406,-13.76 13.76,-13.76z" /></g>
        </g>
      </svg>
    </Box>
    <span>
      <Button>More</Button>
    </span>
  </StyledSpan>
);


export default More;
