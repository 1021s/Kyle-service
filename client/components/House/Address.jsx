/* eslint-disable radix */
/* eslint-disable camelcase */
import React from 'react';


const Address = (props) => {
  const { house } = props;
  const House = house.Address;
  let address;
  if (House !== undefined) {
    const {
      House_number, Street_number, Street, City, State, ZIP_code,
    } = House;
    const strAppend = ['st', 'nd', 'rd', 'th'];
    const { length } = Street_number.toString();
    let end = Street_number.toString()[length - 1];
    if (parseInt(end) > 4) {
      end = 3;
    } else {
      end = parseInt(end) - 1;
    }
    address = (
      <div>
        <strong>
          {House_number}
          {' '}
          {Street_number}
          {strAppend[end]}
          {' '}
          {Street}
          {', '}
          {City}
          {', '}
          {State}
          {', '}
          {ZIP_code}
        </strong>

      </div>
    );
  } else {
    address = null;
  }
  return address;
};


export default Address;
