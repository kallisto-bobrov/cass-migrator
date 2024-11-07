import React from 'react';
import styled from 'styled-components';
import get from 'lodash/get';
import type { QuoteType } from './__types__/Quote.type';
import CopyText from '../../atoms/CopyText/CopyText';
import {
  headline200skin,
  headline500skin,
} from '../../atoms/Headline/Headline.skins';
import { gridGutterHalf } from '../../grid/Container/Container';
import { TileSource } from '../FactTile/FactTile';
import mq from '@/styles/mediaQueries/mediaQueries';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (${mq.smDown}) {
    padding: 0 ${`${gridGutterHalf}px`};
  }
`;

const QuoteText = styled(CopyText)`
  ${headline200skin};

  & > p,
  & > div > p {
    quotes: '\\0022' '\\0022';

    &:before {
      content: open-quote;
    }

    &:after {
      content: close-quote;
    }
  }
`;

const Blockquote = styled.blockquote`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
`;

const Author = styled.div`
  ${headline500skin};
  margin-top: 15px;
`;

const Quote = ({ quote, authorName, quelle }: QuoteType) => (
  <Wrapper>
    <Blockquote>
      {get(quote, '[0].text', null) ? (
        <QuoteText prismicRichText={quote} />
      ) : (
        <QuoteText text={quote as unknown as string} />
      )}
      <footer>
        <cite>
          {authorName && authorName !== '' && <Author>{authorName}</Author>}
          {quelle && quelle !== '' && <TileSource>Quelle: {quelle}</TileSource>}
        </cite>
      </footer>
    </Blockquote>
  </Wrapper>
);

export default Quote;
