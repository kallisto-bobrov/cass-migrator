import React, { ReactNode } from 'react';
import styled from 'styled-components';
import mq from '@/styles/mediaQueries/mediaQueries';

type Props = {
  children: ReactNode;
};

const Styled = styled.div`
  @media (${mq.mdDown}) {
    margin-top: ${(props) => props.theme.skin.header.height};
  }
`;

const Main = ({ children }: Props) => {
  return <Styled>{children}</Styled>;
};

export default Main;
