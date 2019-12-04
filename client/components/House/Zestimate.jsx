import React from 'react';
import Orange from './Orange';


const Zestimate = props => {
    const { house } = props;
    const { Zestimate, Price } = house;
    let zestimate;
    if (Zestimate) {
        let tempZestimate = Price * Math.floor(Math.random() + 1);
        zestimate = tempZestimate.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,').toString();
        zestimate = zestimate.substring(0, zestimate.length - 2);
    } else {
        zestimate = 'None';
    }
        return (
            <div><Orange/> For sale | Zestimate: ${zestimate}</div>
        );
}


export default Zestimate;
