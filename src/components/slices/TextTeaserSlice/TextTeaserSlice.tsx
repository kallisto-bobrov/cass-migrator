import React from 'react';
import get from 'lodash/get';
import type { TextTeaserSliceType } from './__types__/TextTeaserSlice.type';
import TeaserIntro from '../../molecules/TeaserIntro/TeaserIntro';
import TeaserTilesBlock from '../../organisms/TeaserTilesBlock/TeaserTilesBlock';
import colorsMap from '../../../constants/maps/colors.map';
import SliceWrapper from '../../atoms/SliceWrapper/SliceWrapper';

const TextTeaserSlice = ({
  primary,
  items,
  slices,
  index,
}: TextTeaserSliceType) => (
  <SliceWrapper id={primary.ankerlink_titel} bgColor={colorsMap.gray}>
    <TeaserIntro
      headline={get(primary, 'uberschrift[0]', null)!}
      text={get(primary, 'text', null)!}
      chapter={get(primary, 'kapitel', null)}
      slices={slices}
      index={index}
    />
    <TeaserTilesBlock items={items} />
  </SliceWrapper>
);

export default TextTeaserSlice;
