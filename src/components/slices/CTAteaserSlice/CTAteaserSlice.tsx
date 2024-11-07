import React from 'react';
import get from 'lodash/get';
import TeaserIntro from '../../molecules/TeaserIntro/TeaserIntro';
import type { CTAteaserSliceType } from './__types__/CTAteaserSlice.type';

const CTAteaserSlice = ({ primary, slices, index }: CTAteaserSliceType) => {
  return (
    <div id={primary.ankerlink_titel!}>
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
        bild_gross={get(primary, 'bild', null)!}
        bild_position={get(primary, 'bild_position', null)!}
        button_text={get(primary, 'button_text', null)!}
        button_title={get(primary, 'button_title', null)!}
        externe_url={get(primary, 'externe_url', null)!}
        ankerlink_ziel={get(primary, 'ankerlink_ziel', null)!}
        zielseite={get(primary, 'zielseite', null)!}
        fullWidth={true}
        isCTATeaser={true}
      />
    </div>
  );
};

export default CTAteaserSlice;
