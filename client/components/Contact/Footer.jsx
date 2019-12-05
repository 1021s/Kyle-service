import React from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';
import Tour from './Tour';
// import DateButton from './TourExtras/DateButton';

const Footer = (props) => {
  const { showModal } = props;
  return (
    <div>
      <Contact showModal={showModal} />
      <Tour showModal={showModal} />
    </div>
  );
};

Footer.propTypes = {
  showModal: PropTypes.func.isRequired,
};

export default Footer;
