import React from 'react';
import styled from 'styled-components';


const StyledSpan = styled.span`
`;

const Button = styled.button`
background: white;
color: rgb(0,106,255);
padding: 15px;
text-align: center;
margin: 4px 3px 4px 0px;
font-size: 15px;
border: 0.5px solid grey;
${StyledSpan}: hover & {
    border-color: rgb(0,106,255);
};
`;

const Contact = props => {
    return (
        <StyledSpan>
            <Button>Contact an Agent</Button>
        </StyledSpan>
    );
}


export default Contact;
