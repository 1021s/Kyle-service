import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Contact from './Contact';
import Tour from './Tour';

const Div = styled.div`
display: block;
padding-top: 0px 16px 16px;
position: relative;
z-index: 1;
`;

const UL = styled.ul`
display: flex;
width: 100%;
padding-left: 0;
list-style: none;
align-items: center;
`;


const Footer = (props) => {
  const { showModal } = props;
  return (
    <Div>
      <UL>
        <Contact showModal={showModal} />
        <Tour showModal={showModal} />
      </UL>
    </Div>
  );
};

Footer.propTypes = {
  showModal: PropTypes.func.isRequired,
};

export default Footer;
