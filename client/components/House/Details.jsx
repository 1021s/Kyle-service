/* eslint-disable camelcase */
import React from 'react';
import styled from 'styled-components';


const Weight = styled.strong`
font-weight: 600;
font-size: 26px;
margin-right: 8px;
padding-right: 8px;
`;

const Span = styled.span`
border-style: solid;
border-width: 0 1px 0 0;
border-color: #ccc;
margin-right: 8px;
padding-right: 8px;
font-size: 15px;
line-height: 1.533;
`;

const Underlined = styled.span`
border-style: dashed;
border-width: 0 0 1px 0;
borer-color: rgb(167, 166, 171);
cursor: help;
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
          <Span>
            <strong>{Room_count}</strong>
            {' '}
            bd
            {' '}
          </Span>
          <Span>
            <Underlined>
              <strong>{Bathroom_count}</strong>
              {' '}
            ba
              {' '}
            </Underlined>
          </Span>
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
