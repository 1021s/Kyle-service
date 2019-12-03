import React from 'react';
import Qualified from './Qualified';


const Payment = props => {
    const { house } = props;
    const { Price } = house;
    let payment;
    if (Price) {
        let price = Math.floor(Price/(12*17));
        let strPrice = price.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,').toString();
        strPrice = strPrice.substring(0, strPrice.length - 2);
        payment = <div>Est. payment: ${strPrice}/mo  <Qualified /> </div>;
    } else {
        payment = null;
    }
    return payment;
}


export default Payment;
