import React from 'react';
import get from 'lodash/get';
import TeaserIntro from '../../molecules/TeaserIntro/TeaserIntro';
import type { FliesstextSliceType } from './__types__/FliesstextSlice.type';

const FliesstextSlice = ({ primary, slices, index }: FliesstextSliceType) => {
  return (
    <div id={primary.ankerlink_titel}>
      <TeaserIntro
        headline={get(primary, 'uberschrift[0]', null)!}
        text={get(primary, 'text', null)!}
        textColor={get(primary, 'text_color', 'standard')}
        chapter={get(primary, 'kapitel', null)!}
        slices={slices}
        index={index}
        textgrosse={get(primary, 'textgrosse', null)!}
        bild_klein={get(primary, 'bild_klein', null)!}
        bild_medium={get(primary, 'bild_medium', null)!}
        bild_gross={get(primary, 'bild_gross', null)!}
        bild_position={get(primary, 'bild_position', null)!}
        verlinkung_bild_url={get(primary, 'verlinkung_bild_url', null)!}
        verlinkung_link_titel={get(primary, 'verlinkung_link_titel', null)!}
      />
    </div>
  );
};

export default FliesstextSlice;
