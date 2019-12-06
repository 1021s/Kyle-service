import React from 'react';
import More from './More';
import Save from './Save';
import Share from './Share';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
width: 100%;
`;

const Box = styled.div`
margin-left: auto;
`;


const Heading = (props) => {
  // eslint-disable-next-line react/prop-types
  const { showModal } = props;
  return (
    <Container>
      <div>
        <img src="http://zillow.mediaroom.com/download/Zillow_Wordmark_Blue_RGB+lrg.png" alt="Zillow Wordmark" height="26px" width="100px" />
      </div>
      <Box>
        <Save />
        <Share showModal={showModal} />
        <More />
      </Box>
    </Container>
  );
};


export default Heading;
