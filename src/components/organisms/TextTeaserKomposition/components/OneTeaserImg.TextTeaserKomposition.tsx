import React from 'react';
import ColTtk from './Col.TextTeaserKomposition';
import Teaser from '../../../molecules/Teaser/Teaser';
import Picture from '../../../atoms/Picture/Picture';
import type { OneTeaserImgType } from '../__types__/TextTeaserKomposition.type';

const OneTeaserImg = ({
  teaser_one,
  bild_16_9,
  bild_16_9_title,
}: OneTeaserImgType) => (
  <>
    <ColTtk>
      <Picture image={bild_16_9} image_alt={bild_16_9_title} objectFit />
    </ColTtk>
    <ColTtk>
      <Teaser content={teaser_one} />
    </ColTtk>
  </>
);

export default OneTeaserImg;
