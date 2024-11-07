import React from 'react';
import get from 'lodash/get';
import colorsMap from '../../../constants/maps/colors.map';
import TeaserIntro from '../../molecules/TeaserIntro/TeaserIntro';
import SliceWrapper from '../../atoms/SliceWrapper/SliceWrapper';
import type { TestimonialsSliceType } from './__types__/TestimonialsSlice.type';
import sizesMap from '../../../constants/maps/sizes.map';
import Testimonials from '../../organisms/Testimonials/Testimonials';

const TestimonialsSlice = ({
  primary,
  items,
  slices,
  index,
}: TestimonialsSliceType) => (
  <SliceWrapper id={primary.ankerlink_titel} bgColor={colorsMap.white}>
    <TeaserIntro
      headline={get(primary, 'uberschrift[0]', undefined)}
      text={get(primary, 'text', undefined)}
      chapter={get(primary, 'kapitel', undefined)}
      slices={slices}
      index={index}
      textgrosse={sizesMap.standard}
    />
    <Testimonials {...{ items }} />
  </SliceWrapper>
);

export default TestimonialsSlice;
