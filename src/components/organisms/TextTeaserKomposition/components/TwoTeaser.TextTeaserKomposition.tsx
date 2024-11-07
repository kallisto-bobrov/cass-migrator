import React, { Fragment } from 'react';
import ColTtk from './Col.TextTeaserKomposition';
import type { TwoTeaserTtkType } from '../__types__/TextTeaserKomposition.type';
import Teaser from '../../../molecules/Teaser/Teaser';

const TwoTeaserTtk = ({ teaser_one, teaser_two }: TwoTeaserTtkType) => (
  <Fragment>
    <ColTtk>
      <Teaser content={teaser_one} />
    </ColTtk>
    <ColTtk>
      <Teaser content={teaser_two} />
    </ColTtk>
  </Fragment>
);

export default TwoTeaserTtk;
