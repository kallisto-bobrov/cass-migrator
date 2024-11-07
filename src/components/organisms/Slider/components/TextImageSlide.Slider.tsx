import React from 'react';
import get from 'lodash/get';
import styled, { css } from 'styled-components';
import Picture from '../../../atoms/Picture/Picture';

import TeaserIntro from '../../../molecules/TeaserIntro/TeaserIntro';
import { gridGutterHalf } from '../../../grid/Container/Container';
import type { TextImageType } from '../../../slices/TextMitBildSlice/__types__/TextMitBildSlice.type';
import mq from '@/styles/mediaQueries/mediaQueries';
import sizesMap from '@/constants/maps/sizes.map';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 0;
  margin-bottom: 0;
  display: flex;

  @media (${mq.mdDown}) {
    height: 100%;
    flex-direction: column;
  }
`;

const EachHalf = css`
  width: 50%;
  height: 100%;

  @media (${mq.mdDown}) {
    width: 100%;
  }
`;

const Article = styled.div`
  ${EachHalf};
  background: ${(props) => props.theme.color.gray500};
  padding: 55px 100px 55px 35px;
  box-sizing: border-box;
  overflow: auto;

  @media (${mq.mdDown}) {
    order: 2;
    padding: 55px ${`${gridGutterHalf}px`};
  }

  @media (${mq.smDown}) {
    padding: 35px 0 50px;
  }

  @media (${mq.xs}) {
    padding: 50px 0;
  }
`;

const Image = styled.div`
  ${EachHalf};

  @media (${mq.mdDown}) {
    order: 1;
    position: relative;
    height: 0;
    padding-top: 52.25%;
  }
`;

const PictureStyled = styled(Picture)`
  position: absolute;
  top: 0;

  @media (${mq.lgUp}) {
    width: 50%;
  }
`;

const TextImageSlide = ({ item }: TextImageType) => (
  <Wrapper>
    <Article>
      <TeaserIntro
        headline={get(item, 'primary.uberschrift[0]', undefined)}
        text={get(item, 'item.text', undefined)}
        chapter={get(item, 'primary.kapitel', undefined)}
        slices={get(item, 'slices', undefined)}
        index={get(item, 'index', undefined)}
        textgrosse={sizesMap.standard}
        fullWidth
      />
    </Article>
    <Image>
      <PictureStyled image={get(item, 'item.bild', undefined)} objectFit />
    </Image>
  </Wrapper>
);

export default TextImageSlide;
