import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
background: white;
border: none;
padding: 20px 0px;
`;

const CarouselButton = (props) => {
  const { Switch, img, alt } = props;
  return (
    <Button onClick={() => Switch()}><img src={img} alt={alt} width="18px" height="17px" /></Button>
  );
};

export default CarouselButton;
