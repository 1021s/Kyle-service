import React from 'react';
import Contact from './Contact';
import Tour from './Tour';

const Footer = props => {
    const { showModal } = props;
    return (
        <div>
            <Contact showModal={showModal}/>
            <Tour />
        </div>
    )
}


export default Footer;