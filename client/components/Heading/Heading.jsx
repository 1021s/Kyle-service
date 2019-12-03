import React from 'react';
import More from './More';
import Save from './Save';
import Share from './Share';
import styled from 'styled-components';


const Styled = styled.span`
`;

const StyledSave = styled(Save)`
background: white;
color: blue;
padding: 15px;
text-align: center;
font-size: 15px;
border: none;
${Styled}: hover & {
    color: #5076de;
};
`;


const Heading = props => {
    return (
        <div>
            Zillow pic with hover text
            <Save />
            <Share />
            <More />
        </div>
    );
}


export default Heading;
