import React from 'react';
import More from './More';
import Save from './Save';
import Share from './Share';


const Heading = props => {
    return (
        <div>
            <img src="http://zillow.mediaroom.com/download/Zillow_Wordmark_Blue_RGB+lrg.png" alt="Zillow Wordmark" height="26px" width="100px" />
            <Save />
            <Share showModal={props.showModal} />
            <More />
        </div>
    );
}


export default Heading;
