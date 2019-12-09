import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


// const StyledSpan = styled.span`
// `;
const LI = styled.li`
list-style: none;
flex-grow: 1;
flex-basis: 0;
`;

const Button = styled.button`
display: list-item;
background: white;
line-height: 21px;
font-weight: 600;
width: 100%;
height: 42px;
color: rgb(0,106,255);
padding: 9.5px 20px;
text-align: center;
font-size: 14px;
border: 1px solid grey;
border-radius: 3px;
cursor: pointer;
${LI}: hover & {
    border-color: rgb(0,106,255);
    transition: all .2s ease;
};
`;

const Contact = (props) => {
  const { showModal } = props;
  return (
    <LI>
      <Button onClick={() => showModal('contactModal')}>Contact Agent</Button>
    </LI>
  );
};

Contact.propTypes = {
  showModal: PropTypes.func.isRequired,
};


export default Contact;
