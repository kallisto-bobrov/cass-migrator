import React from 'react';
import get from 'lodash/get';
import type { TextboxenSchmuckbilderSliceType } from './__types__/TextboxenSchmuckbilderSlice.type';
import SliceWrapper from '../../atoms/SliceWrapper/SliceWrapper';
import TeaserIntro from '../../molecules/TeaserIntro/TeaserIntro';
import TextboxenSchmuckbilderBlock from '../../organisms/TextboxenSchmuckbilderBlock/TextboxenSchmuckbilderBlock';

const TextboxenSchmuckbilderSlice = ({
  primary,
  items,
  index,
  slices,
}: TextboxenSchmuckbilderSliceType) => (
  <SliceWrapper id={get(primary, 'ankerlink_titel', null)!}>
    <TeaserIntro
      headline={get(primary, 'uberschrift[0]', null)!}
      text={get(primary, 'text', null)!}
      chapter={get(primary, 'kapitel', null)}
      slices={slices}
      index={index}
    />
    <TextboxenSchmuckbilderBlock
      tiles={items}
      image2to3={get(primary, 'bild_2_3', null)!}
      image2to3_title={get(primary, 'bild_2_3_title', null)!}
      image16to9={get(primary, 'bild_16_9', null)!}
      image16to9_title={get(primary, 'bild_16_9_title', null)!}
    />
  </SliceWrapper>
);

export default TextboxenSchmuckbilderSlice;
