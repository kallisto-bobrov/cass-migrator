import React from 'react';
import get from 'lodash/get';
import colorsMap from '../../../constants/maps/colors.map';
import TeaserIntro from '../../molecules/TeaserIntro/TeaserIntro';
import SliceWrapper from '../../atoms/SliceWrapper/SliceWrapper';
import type { LogoBanderoleSliceType } from './__types__/LogoBanderoleSlice.type';
import sizesMap from '../../../constants/maps/sizes.map';
import LogoBanderole from '../../organisms/LogoBanderole/LogoBanderole';

const LogoBanderoleSlice = ({
  primary,
  items,
  slices,
  index,
}: LogoBanderoleSliceType) => (
  <SliceWrapper id={primary.ankerlink_titel} bgColor={colorsMap.white}>
    <TeaserIntro
      headline={get(primary, 'uberschrift[0]', undefined)}
      text={get(primary, 'text', undefined)}
      chapter={get(primary, 'kapitel', undefined)}
      slices={slices}
      index={index}
      textgrosse={sizesMap.standard}
    />
    <LogoBanderole {...{ items }} />
  </SliceWrapper>
);

export default LogoBanderoleSlice;
