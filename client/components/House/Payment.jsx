import React from 'react';


const Payment = props => {
    const { house } = props;
    const { Price } = house;
    let payment;
    if (Price) {
        let price = Math.floor(Price/(12*17));
        payment = <div>Est. payment: ${price}/mo </div>;
    } else {
        payment = null;
    }
    return payment;
}


export default Payment;
