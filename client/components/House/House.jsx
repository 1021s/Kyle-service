import React from 'react';
import Address from './Address';
import Details from './Details';
import Payment from './Payment';
import Zestimate from './Zestimate';
import Qualified from './Qualified';


const House = props => {
    const { house } = props;
    return (
        <div>
            <Details house={house} />
            <Address house={house} />
            <div>For sale | </div>
            <Zestimate house={house} /> <Qualified />
            <Payment house={house} />
        </div>
    );
}


export default House;
