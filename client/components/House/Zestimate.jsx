import React from 'react';
import styled from 'styled-components';
import Orange from './Orange';


const Span = styled.span`
font-weight: 600;
border-style: solid;
border-width: 0 1px 0 0;
border-color: #ccc;
margin-right: 8px;
padding-right: 8px;
`;

const Div = styled.div`
font-size: 13px;
line-height: 1.461;
`;

const Zestimate = (props) => {
  const { house } = props;
  const { Zestimate, Price } = house;
  let zestimate;
  if (Zestimate) {
    const tempZestimate = Price * Math.floor(Math.random() + 1);
    zestimate = tempZestimate.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,').toString();
    zestimate = zestimate.substring(0, zestimate.length - 2);
  } else {
    zestimate = 'None';
  }
  return (
    <Div>
      <Span>
        <Orange />
        {' '}
        For sale
      </Span>
      {' '}
        Zestimate: $
      {zestimate}
    </Div>
  );
};


export default Zestimate;
