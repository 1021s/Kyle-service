import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSpan = styled.span`
`;

const Button = styled.button`
background: rgb(0,106,255);
color: white;
padding: 15px;
text-align: center;
margin: 4px 3px;
font-size: 15px;
border: 0.5px solid rgb(0,106,255);
border-radius: 4px;
${StyledSpan}: hover & {
    background: white;
    color: rgb(0,106,255);
};
`;


const Tour = (props) => {
  const { showModal } = props;
  return (
    <StyledSpan>
      <Button onClick={() => showModal('tourModal')}>Take a Tour</Button>
    </StyledSpan>
  );
};

Tour.propTypes = {
  showModal: PropTypes.func.isRequired,
};


export default Tour;
