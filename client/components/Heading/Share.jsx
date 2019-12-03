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

const Share = props => {
    return (
        <StyledSpan>
            <Button>Arrow: Share</Button>
        </StyledSpan>
    );
}


export default Share;
