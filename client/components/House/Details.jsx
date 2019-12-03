import React from 'react';


const Details = props => {
    const { house } = props;
    const { Details, Price } = house;
    let details;
    if (Details !== undefined) {
        let price = Price.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,').toString();
        price = price.substring(0, price.length - 2);

        const { Room_count, Bathroom_count, Square_footage } = Details;
        details = <div>
            <div>${price}  {Room_count} bd | {Bathroom_count} ba for more info | {Square_footage} sqft</div>
        </div>;

    } else {
        details = null;
    }
    return details;
}


export default Details;
