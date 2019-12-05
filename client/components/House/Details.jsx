/* eslint-disable camelcase */
import React from 'react';
import styled from 'styled-components';


const Weight = styled.strong`
font-weight: bold;
font-size: 30px;
`;


const Details = (props) => {
  const { house } = props;
  const { Price } = house;
  const info = house.Details;
  let details;
  if (info !== undefined) {
    let price = Price.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,').toString();
    price = price.substring(0, price.length - 2);

    const { Room_count, Bathroom_count, Square_footage } = info;
    details = (
      <div>
        <div>
          <Weight>
            $
            {price}
          </Weight>
          <strong>{Room_count}</strong>
          {' '}
            bd |
          {' '}
          <strong>{Bathroom_count}</strong>
          {' '}
            ba |
          {' '}
          <strong>{Square_footage}</strong>
          {' '}
            sqft
        </div>
      </div>
    );
  } else {
    details = null;
  }
  return details;
};


export default Details;
