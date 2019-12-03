import React from 'react';
import styled from 'styled-components';
import StyledSpan from './StyledSpan';



const Button = styled.button`
color: white;
padding: 15px;
text-align: center;
font-size: 15px;
border: 0.5px solid rgb(0,106,255);
background: rgb(0,106,255);
${StyledSpan}: hover & {

}
`;

const Send = props => {
    return (
        <StyledSpan>
            <Button>Send email</Button>
        </StyledSpan>
    );
}



export default Send;