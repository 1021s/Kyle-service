import React from 'react';


const Address = props => {
    const {house} = props;
    const {Address} = house;
    let address;
    if(Address !== undefined) {
    const {House_number, Street_number, Street, City, State, ZIP_code} = Address;
    let strAppend = ['st', 'nd', 'rd', 'th'];
    const length = Street_number.toString().length;
    let end = Street_number.toString()[length -1];
    if(parseInt(end) > 4) {
        end = 3;
    } else {
        end = parseInt(end) - 1;
    }
    address = <div>{House_number} {Street_number}{strAppend[end]} {Street}, {City}, {State} {ZIP_code}</div>;
    } else {
        address = null;
    }
    return address;
}


export default Address;
