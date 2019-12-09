import React from 'react';
import styled from 'styled-components';


const LI = styled.li`
list-style: none;
flex-grow: 1;
flex-basis: 0;
`;

const Button = styled.button`
display: list-item;
background: rgb(0,106,255);
line-height: 1.5;
text-transform: none;
font-weight: 600;
width: 100%;
height: 42px;
color: white;
padding: 9.5px 20px;
text-align: center;
font-size: 14px;
border: 1px solid grey;
border-radius: 3px;
cursor: pointer;
${LI}: hover & {
    background: linear-gradient(to top, #0D4599, #006AFF);
    background-repeat: repeat-x;
    transition: all .2s ease;
};
`;

const ContactButton = (props) => {
  const { close, children } = props;
  return (
    <LI>
      <Button onClick={close}>{ children }</Button>
    </LI>
  );
};


export default ContactButton;
