import React from 'react';
import get from 'lodash/get';
import { DownloadTeaserSliceType } from './__types__/DownloadTeaserSlice.type';
import SliceWrapper from '../../atoms/SliceWrapper/SliceWrapper';
import colorsMap from '../../../constants/maps/colors.map';
import TeaserIntro from '../../molecules/TeaserIntro/TeaserIntro';
import sizesMap from '../../../constants/maps/sizes.map';
import TeaserOverview from '../../organisms/TeaserOverview/TeaserOverview';

const DownloadTeaserSlice = ({
  primary,
  items,
  slices,
  index,
}: DownloadTeaserSliceType) => (
  <SliceWrapper id={primary.ankerlink_titel} bgColor={colorsMap.white}>
    <TeaserIntro
      headline={get(primary, 'uberschrift[0]', null)!}
      text={get(primary, 'text', null)!}
      chapter={get(primary, 'kapitel', null)}
      slices={slices}
      index={index}
      textgrosse={sizesMap.standard}
    />
    <TeaserOverview
      items={items}
      teaserType="download"
      buttonText={get(
        primary,
        'primary.showMore',
        'Weitere Downloads anzeigen',
      )}
    />
  </SliceWrapper>
);

export default DownloadTeaserSlice;
