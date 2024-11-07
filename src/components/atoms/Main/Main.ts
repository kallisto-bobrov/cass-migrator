'use client';

import styled from 'styled-components';
import mq from '@/styles/mediaQueries/mediaQueries';

export const Main = styled.main`
  @media (${mq.lgDown}) {
    margin-top: 76px;
  }
`;
