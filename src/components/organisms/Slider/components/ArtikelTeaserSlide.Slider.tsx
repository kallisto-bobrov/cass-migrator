import React, { Fragment } from 'react';
import get from 'lodash/get';
import chooseTile from '../../../../helpers/chooseTile/chooseTile';
import PRISMIC_CUSTOM_TYPES from '@/app/lib/globalConfig/prismicCustomTypes.config';

const ArticleTeaserSlide = ({ item }: any) => {
  const hasTarget = get(item, 'zielseite.data', null);
  const tile = {
    type: PRISMIC_CUSTOM_TYPES.article,
    data: {
      teaser_dachzeile: get(item, 'slice_teaser_dachzeile', null),
      teaser_uberschrift: get(item, 'slice_teaser_uberschrift', null),
      teaser_text: get(item, 'slice_teaser_text', null),
      teaser_bild_title: get(item, 'slice_teaser_bild_titel', null),
      teaser_bild_16_9: get(item, 'slice_teaser_bild_16_9', null),
    },
  };
  if (!hasTarget && tile.data?.teaser_text?.length === 0) {
    return null;
  }
  return (
    <>
      {hasTarget
        ? chooseTile(
            get(item, 'zielseite', null)!,
            get(item, 'foreign_content_link', null)!,
          )
        : chooseTile(tile, undefined, hasTarget)}
    </>
  );
};

export default ArticleTeaserSlide;
