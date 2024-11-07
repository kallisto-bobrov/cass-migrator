import React from 'react';
import type { TwoTeaserVerticalImgType } from '../__types__/TextTeaserKomposition.type';
import ColTtk from './Col.TextTeaserKomposition';
import Teaser from '../../../molecules/Teaser/Teaser';
import Picture from '../../../atoms/Picture/Picture';

const TwoTeaserVerticalImg = ({
  teaser_one,
  teaser_two,
  bild_2_3,
  bild_2_3_title,
}: TwoTeaserVerticalImgType) => (
  <>
    <ColTtk>
      <Teaser content={teaser_one} />
      <Teaser content={teaser_two} />
    </ColTtk>
    <ColTtk>
      <Picture image={bild_2_3} image_alt={bild_2_3_title} objectFit />
    </ColTtk>
  </>
);

export default TwoTeaserVerticalImg;
