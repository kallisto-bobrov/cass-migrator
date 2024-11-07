import React from 'react';
import get from 'lodash/get';
import type { TextTeaserKompositionSliceType } from './__types__/TextTeaserKompositionSlice.type';
import SliceWrapper from '../../atoms/SliceWrapper/SliceWrapper';
import TeaserIntro from '../../molecules/TeaserIntro/TeaserIntro';
import TextTeaserKomposition from '../../organisms/TextTeaserKomposition/TextTeaserKomposition';

const TextTeaserKompositionSlice = ({
  items,
  primary,
  slices,
  index,
}: TextTeaserKompositionSliceType) => (
  <SliceWrapper id={primary.ankerlink_titel}>
    <TeaserIntro
      headline={get(primary, 'uberschrift[0]', null)!}
      text={get(primary, 'text', null)!}
      chapter={get(primary, 'kapitel', null)}
      slices={slices}
      index={index}
    />
    <TextTeaserKomposition items={items} />
  </SliceWrapper>
);

export default TextTeaserKompositionSlice;
