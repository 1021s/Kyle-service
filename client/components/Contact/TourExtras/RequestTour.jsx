import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSpan = styled.span`
`;

const Button = styled.button`
color: white;
padding: 6px, 11px;
width: 401px;
text-align: center;
font-size: 15px;
border: 1px solid transparent;
border-radius: 5px;
background: #006AFF;
${StyledSpan}: hover & {
background: rgb
}
`;

const RequestTour = (props) => {
  const { contact } = props;
  return (
    <StyledSpan>
      <Button onClick={() => contact()}>Request tour</Button>
    </StyledSpan>
  );
};

RequestTour.propTypes = {
  contact: PropTypes.func.isRequired,
};

export default RequestTour;
