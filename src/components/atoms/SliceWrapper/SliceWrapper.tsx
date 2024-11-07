import React from 'react';
import styled from 'styled-components';
import type { SliceWrapperType } from './__types__/SliceWrapper.type';
import colorsMap from '../../../constants/maps/colors.map';
import mq from '@/styles/mediaQueries/mediaQueries';

const Wrapper = styled.div<{ $bgColor: string }>`
  padding-bottom: 100px;
  background: ${(props) =>
    props.$bgColor === colorsMap.gray && props.theme.color.gray500};

  @media (${mq.xs}) {
    padding-bottom: 0;
  }
`;

const SliceWrapper = ({
  id,
  children,
  className,
  bgColor = colorsMap.white,
}: SliceWrapperType) => (
  <Wrapper id={id} className={className} $bgColor={bgColor}>
    {children}
  </Wrapper>
);

export default SliceWrapper;
