import React from 'react';
import get from 'lodash/get';
import type {
  ExternalLink,
  InternalLink,
} from '@/components/atoms/Link/__types__/Link.type';
import skinMap from '../../constants/maps/skin.map';
import colorsMap from '../../constants/maps/colors.map';
import PRISMIC_CUSTOM_TYPES from '@/app/lib/globalConfig/prismicCustomTypes.config';
import tilesMap from '@/constants/maps/tilesMap';

const UndefinedTile = () => <></>;

const chooseTile = (
  data?: any,
  foreign_content_link?: InternalLink | ExternalLink,
  hasTarget = true,
) => {
  if (data!.type) {
    const isClickableTile =
      get(data, 'type', null) === PRISMIC_CUSTOM_TYPES.page ||
      get(data, 'type', null) === PRISMIC_CUSTOM_TYPES.article ||
      get(data, 'type', null) === PRISMIC_CUSTOM_TYPES.whitepaper ||
      get(data, 'type', null) === PRISMIC_CUSTOM_TYPES.interview ||
      get(data, 'type', null) === PRISMIC_CUSTOM_TYPES.podcast;

    return React.createElement(
      // @ts-ignore
      get(tilesMap!, get(data, 'type', undefined)!, UndefinedTile!)!,
      {
        quote: get(data, 'data.zitat', null),
        quelle: get(data, 'data.quelle', null),
        authorName: get(data, 'data.author', null),
        dachzeile: get(data, 'data.teaser_dachzeile', null),
        kennziffer: get(data, 'data.kennziffer', null),
        text: get(data, 'data.teaser_text', null),
        teaser_uberschrift: get(data, 'data.teaser_uberschrift', null),
        teaser_text: get(data, 'data.teaser_text', null),
        teaser_link_text: get(data, 'data.teaser_link_text', null),
        link: data.url,
        externer_link: get(data, 'data.externer_link', null),
        link_title: get(data, 'data.teaser_link_title', null),
        event_schema_start_date: get(
          data,
          'data.event_schema_start_date',
          null,
        ),
        event_schema_location_city: get(
          data,
          'data.event_schema_location_city',
          null,
        ),
        no3dHover: true,
        headline: get(data, 'data.teaser_uberschrift[0]', null),
        link_text:
          hasTarget && get(data, 'data.teaser_link_text', 'Mehr erfahren'),
        zielseite: data,
        teaser_bild_16_9: get(data, 'data.teaser_bild_16_9', null),
        embedUrl: get(data, 'data.youtube_link', null),
        link_whitepaper: get(data, 'data.link_whitepaper', null),
        skin: hasTarget && isClickableTile ? skinMap.magazin : skinMap.video,
        teaser_bild_title: get(data, 'zielseite.data.teaser_bild_title', null),
        bgColor: isClickableTile ? colorsMap.white : null,
        foreignContentLink: foreign_content_link,
      },
    );
  }
  return <></>;
};

export default chooseTile;
