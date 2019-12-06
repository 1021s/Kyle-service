import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import StyledSpan from './StyledSpan';

const Button = styled.button`
background: white;
color: rgb(0,106,255);
padding: 10px 10px;
text-align: center;
font-size: 15px;
border: none;
${StyledSpan}: hover & {
    color: rgba(0,106,255, 0.5);
};
`;

const Box = styled.span`
display: inline-block;
transform: rotate(90deg);
`;

const Share = (props) => {
  const { showModal } = props;
  return (
    <StyledSpan onClick={() => showModal('shareModal')}>
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
            <g fill="#006aff"><path d="M68.8,1.1825l-2.795,3.655l-49.45,65.36l-4.1925,5.4825h36.0125c1.20938,48.63031 26.41813,73.53 51.6,85.2475c25.45063,11.85188 50.39063,11.09938 51.0625,11.0725h0.1075h0.3225l0.1075,-6.88c0,0 -15.19781,-1.10187 -30.745,-13.115c-15.09031,-11.66375 -30.19406,-33.87594 -31.0675,-76.325h35.475l-4.1925,-5.4825l-49.45,-65.36zM68.8,12.5775l42.57,56.2225h-28.81v3.44c0,46.61469 16.83719,71.99813 33.97,85.2475c2.21719,1.72 4.36719,2.75469 6.5575,4.085c-6.40969,-1.54531 -13.115,-3.62812 -20.1025,-6.88c-24.08,-11.20687 -47.945,-33.71469 -47.945,-82.4525v-3.44h-28.81z" /></g>
          </g>
        </svg>
      </Box>
      <span>
        <Button onClick={() => showModal('shareModal')}>Share</Button>
      </span>
    </StyledSpan>
  );
};

Share.propTypes = {
  showModal: PropTypes.func.isRequired,
};


export default Share;
