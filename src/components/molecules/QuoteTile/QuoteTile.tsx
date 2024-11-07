import React from 'react';
import styled from 'styled-components';
import type { QuoteType } from '../Quote/__types__/Quote.type';
import Quote from '../Quote/Quote';
import { tilePadding } from '../TeaserTile/TeaserTile';
import { gridGutterHalf } from '../../grid/Container/Container';
import mq from '@/styles/mediaQueries/mediaQueries';

const ComponentNameStyled = styled.div`
  padding: ${tilePadding};
  height: 100%;

  @media (${mq.smDown}) {
    padding: ${`${gridGutterHalf}px`} 0;
  }
`;

const QuoteTile = ({ quote, authorName, quelle }: QuoteType) => (
  <ComponentNameStyled>
    <Quote quote={quote} authorName={authorName} quelle={quelle} />
  </ComponentNameStyled>
);

export default QuoteTile;
