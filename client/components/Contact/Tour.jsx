import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LI = styled.li`
list-style: none;
flex-grow: 1;
flex-basis: 0;
`;

const Button = styled.button`
display: list-item;
background: rgb(0,106,255);
line-height: 21px;
font-weight: 600;
width: 100%;
height: 42px;
color: white;
padding: 9.5px 20px;
text-align: center;
margin-left: 8px;
font-size: 14px;
border: 1px solid grey;
border-radius: 3px;
cursor: pointer;
${LI}: hover & {
    background: white;
    color: rgb(0, 106, 255);
    border-color: rgb(0,106,255);
    transition: all .2s ease;
};
`;


const Tour = (props) => {
  const { showModal } = props;
  return (
    <LI>
      <Button onClick={() => showModal('tourModal')}>Take a Tour</Button>
    </LI>
  );
};

Tour.propTypes = {
  showModal: PropTypes.func.isRequired,
};


export default Tour;
