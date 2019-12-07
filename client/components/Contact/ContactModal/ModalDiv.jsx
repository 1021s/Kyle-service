import React from 'react';
import styled from 'styled-components';


const ModalDiv = styled.div`
position: absolute;
background-color: rgba(0,0,0,0.1);
border: 1px solid white;
transition: 1.1s ease-out;
display: inline-block
text-align: center;
filter: blur(0);
transform: scale(1);
opacity: 1;
z-index: 1;
height: 100%
width: 100%;
top: 0;
left: 0;
`;


export default ModalDiv;
