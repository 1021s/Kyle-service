import React from 'react';
import More from './More';
import Save from './Save';
import Share from './Share';


const Heading = props => {
    return (
        <div>
            Zillow pic with hover text
            <Save />
            <Share />
            <More />
        </div>
    );
}


export default Heading;
