import React from 'react';
import styled from 'styled-components';

const Input = (props) => {
  const { img, name, placeholder, value, onChange} = props;
  const Special = styled.input`
    background-image: url(${img});
    background-repeat: no-repeat;
    padding-left: 20px;
    padding-top: 3px;
    margin-bottom: 6px;
`;

  return (
    <Special type="text" name={name} placeholder={placeholder} value={value} onChange={() => onChange(event)} size="50" />
  );
};


export default Input;
