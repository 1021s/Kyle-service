import React from 'react';
import Contact from './Contact';
import Tour from './Tour';
import DateButton from './TourExtras/DateButton';

const Footer = (props) => {
  const { showModal } = props;
  return (
    <div>
      <Contact showModal={showModal} />
      <Tour />
    </div>
  );
};


export default Footer;
