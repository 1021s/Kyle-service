import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import StyledSpan from './StyledSpan';

const Button = styled.button`
background: white;
color: rgb(0,106,255);
padding: 10px 5px;
text-align: center;
font-size: 15px;
border: none;
${StyledSpan}: hover & {
    color: rgba(0,106,255, 0.5);
};
`;

const Share = (props) => {
  const { showModal } = props;
  return (
    <StyledSpan>
      <Button onClick={() => showModal('shareModal')}>Arrow: Share</Button>
    </StyledSpan>
  );
};

Share.propTypes = {
  showModal: PropTypes.func.isRequired,
};


export default Share;
