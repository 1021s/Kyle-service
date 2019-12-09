/* eslint-disable radix */
/* eslint-disable camelcase */
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
font-size: 15px;
line-height: 1.53;
font-weight: 600;
letter-spacing: normal;
`;

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
      <Div>
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
      </Div>
    );
  } else {
    address = null;
  }
  return address;
};


export default Address;
