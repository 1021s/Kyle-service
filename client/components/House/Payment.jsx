import React from 'react';
import Qualified from './Qualified';
import styled from 'styled-components';


const Span = styled.span`
font-weight: 700;
`;

const Div = styled.div`
font-size: 14px;
`;


const Payment = (props) => {
  const { house } = props;
  const { Price } = house;
  let payment;
  if (Price) {
    const price = Math.floor(Price / (12 * 17));
    let strPrice = price.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,').toString();
    strPrice = strPrice.substring(0, strPrice.length - 2);
    payment = (
      <Div>
        <Span>
        Est. payment:
        </Span>
        {' $'}
        {strPrice}
    /mo
        {' '}
        <Qualified />
      </Div>
    );
  } else {
    payment = null;
  }
  return payment;
};


export default Payment;
