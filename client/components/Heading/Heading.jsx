import React from 'react';
import More from './More';
import Save from './Save';
import Share from './Share';


const Heading = props => {
    return (
        <div>
            <div>Zillow pic with hover text</div>
            <Save />
            <Share />
            <More />
        </div>
    );
}


export default Heading;
