import React from 'react';
import styled from 'styled-components';

const ImageStyled = styled.img`
  width: 30px;
  height: 30px;
`;

const Wrapper = styled.div`
  text-align: center;
  padding: 48px 0;
`;

const Spinner = () => {
  return (
    <Wrapper>
      <ImageStyled src={`/images/cassini_spinner.gif`} />
    </Wrapper>
  );
};

export default Spinner;
