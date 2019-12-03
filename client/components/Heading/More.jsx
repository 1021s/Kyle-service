import React from 'react';
import styled from 'styled-components';

const StyledSpan = styled.span`
`;

const Button = styled.button`
background: white;
color: blue;
padding: 15px;
text-align: center;
font-size: 15px;
border: none;
${StyledSpan}: hover & {
    color: #5076de;
};
`;


const More = props => {
    return (
        <StyledSpan>
            <Button>dot dot dot: More</Button>
        </StyledSpan>
    );
}


export default More;
