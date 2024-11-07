import React from 'react';
import styled from 'styled-components';
import get from 'lodash/get';
import type { MediaSlideType } from '../../../slices/TextMitBildSlice/__types__/TextMitBildSlice.type';
import Picture from '../../../atoms/Picture/Picture';
import Video from '../../../atoms/Video/Video';
import { copySmall } from '../../../atoms/CopyText/CopyText.skins';
import mq from '@/styles/mediaQueries/mediaQueries';

const Figure = styled.figure`
  @media (${mq.smDown}) {
    margin-top: 25px;
  }
`;

const Figcaption = styled.figcaption`
  ${copySmall};
  margin-top: 15px;
`;

const MediaSlide = ({ item }: MediaSlideType) => (
  <Figure>
    {get(item, 'bild.url', null) && (
      <Picture image={get(item, 'bild', null)!} />
    )}
    {!get(item, 'bild.url', null) &&
      get(item, 'youtube_link.embed_url', null) && (
        <Video embedUrl={get(item, 'youtube_link.embed_url', null)} />
      )}
    {get(item, 'bildunterschrift', null) && (
      <Figcaption>{get(item, 'bildunterschrift', null)}</Figcaption>
    )}
  </Figure>
);

export default MediaSlide;
