import React from 'react';
import styled from 'styled-components';
import Address from './Address';
import Details from './Details';
import Payment from './Payment';
import Zestimate from './Zestimate';


const House = (props) => {
  const { house } = props;
  return (
    <div>
      <Details house={house} />
      <Address house={house} />
      <Zestimate house={house} />
      <Payment house={house} />
    </div>
  );
};


export default House;
