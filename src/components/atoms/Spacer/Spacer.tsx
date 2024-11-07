import React from 'react';
import styled from 'styled-components';
import mq from '@/styles/mediaQueries/mediaQueries';

const SpacerStyled = styled.div`
  height: 75px;

  @media (${mq.xs}) {
    height: 35px;
  }
`;

const Spacer = () => <SpacerStyled />;

export default Spacer;
