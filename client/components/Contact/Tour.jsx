import React from 'react';
import styled from 'styled-components';

const StyledSpan = styled.span`
`;

const Button = styled.button`
background: rgb(0,106,255);
color: white;
padding: 15px;
text-align: center;
font-size: 15px;
border: 0.5px solid rgb(0,106,255);
${StyledSpan}: hover & {
    background: white;
    color: rgb(0,106,255);
};
`;




const Tour = props => {
    return (
        <StyledSpan>
            <Button>Take a Tour</Button>
        </StyledSpan>
    );
}


export default Tour;
