import React from 'react';
import get from 'lodash/get';
import styled from 'styled-components';
import Headline from '../../../atoms/Headline/Headline';
import { gridGutter } from '../../../grid/Container/Container';
import type { CTCBHeadlineType } from '../__types__/CornerTeaserContentBlock.type';
import mq from '@/styles/mediaQueries/mediaQueries';

export const CornerTeaserHeader = styled.div<{ $standAlone?: boolean }>`
  background: ${(props) => props.theme.color.primary800};
  padding: 35px;
  width: 100%;
  box-sizing: border-box;

  @media (${mq.mdUp}) {
    height: 100%;
  }

  @media (${mq.md}) {
    width: ${(props) => (props.$standAlone ? '100%' : '40%')};
  }

  @media (${mq.xs}) {
    padding: ${`${gridGutter}px`};
  }
`;

const CornerTeaserHeadlineStyled = styled(Headline)`
  color: ${(props) => props.theme.color.white};
`;

const CTCBHeadline = ({ headline, standAlone }: CTCBHeadlineType) => (
  <CornerTeaserHeader $standAlone={standAlone}>
    {get(headline, 'text', null) && (
      <CornerTeaserHeadlineStyled skin="headline800" type={headline!.type}>
        {headline!.text!}
      </CornerTeaserHeadlineStyled>
    )}
  </CornerTeaserHeader>
);

export default CTCBHeadline;
