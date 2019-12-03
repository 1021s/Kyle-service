import React from 'react';


const Address = props => {
    const {house} = props;
    const {Address} = house;
    let address;
    if(Address !== undefined) {
    const {House_number, Street_number, Street, City, State, ZIP_code} = Address;
    address = <div>{House_number} {Street_number} {Street}, {City}, {State} {ZIP_code}</div>;
    } else {
        address = null;
    }
    return address;
}


export default Address;
