import React from 'react';


const Details = props => {
    const { house } = props;
    const { Details } = house;
    let details;
    if(Details !== undefined) {
    const { Room_count, Bathroom_count, Square_footage } = Details;
    details = <div>
        <div>{Room_count} bd</div>
        <div>{Bathroom_count} ba for more info</div>
        <div>{Square_footage} sqft</div>
    </div>;

    } else {
    details = null;
    }
    return details;
}


export default Details;
