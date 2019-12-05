import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const StyledSpan = styled.span`
`;

const Button = styled.button`
background: white;
color: rgb(0,106,255);
padding: 15px;
text-align: center;
margin: 4px 3px 4px 0px;
font-size: 15px;
border: 0.5px solid grey;
border-radius: 2px;
${StyledSpan}: hover & {
    border-color: rgb(0,106,255);
};
`;

const Contact = (props) => {
  const { showModal } = props;
  return (
    <StyledSpan>
      <Button onClick={() => showModal('contactModal')}>Contact Agent</Button>
    </StyledSpan>
  );
};

Contact.propTypes = {
  showModal: PropTypes.func.isRequired,
};


export default Contact;
