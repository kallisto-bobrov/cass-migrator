import React from 'react';
import get from 'lodash/get';
import elmStyleMap from '../../../../constants/maps/elmStyle.map';
import CornerTeaserContentBlock from '../../../molecules/CornerTeaserContentBlock/CornerTeaserContentBlock';
import BgImage from '../../BgImage/BgImage';
import type { FullscreenImageTeaserSliderType } from '../__types__/Slider.type';
import mq from '@/styles/mediaQueries/mediaQueries';
import type { PrismicHeadline } from '@/components/atoms/Headline/__types__/Headline.types';
import { InternalLink } from '@/components/atoms/Link/__types__/Link.type';

const FullscreenImageTeaser = ({ item }: FullscreenImageTeaserSliderType) => {
  const headline: PrismicHeadline = get(item, 'data.teaser_uberschrift[0]', {});
  if (headline) headline.type = 'heading3';
  return (
    <BgImage
      {...{
        images: [
          {
            bp: mq.lgUp,
            url: get(item, 'data.teaser_bild.url', undefined),
            dimensions: get(item, 'data.teaser_bild.dimensions', undefined),
            fullscreen: true,
          },
          {
            bp: mq.smTillmd,
            url: get(item, 'data.teaser_bild.MD.url', undefined),
            dimensions: get(item, 'data.teaser_bild.MD.dimensions', undefined),
            fullscreen: false,
          },
          {
            bp: mq.xs,
            url: get(item, 'data.teaser_bild.XS.url', undefined),
            dimensions: get(item, 'data.teaser_bild.XS.dimensions', undefined),
            fullscreen: false,
          },
        ],
        title: get(item, 'data.teaser_bild_titel', undefined),
        scrollIndicator: false,
        elmStyle: elmStyleMap.slider,
      }}
    >
      <CornerTeaserContentBlock
        headline={headline!}
        text={get(item, 'data.teaser_text', undefined)}
        link={item as unknown as InternalLink}
        link_text={get(item, 'data.teaser_link_text', undefined)}
        link_title={get(item, 'data.teaser_link_title', undefined)}
        overline={get(item, 'data.teaser_dachzeile', undefined)}
        noHeadlineHighlight
        slider
      />
    </BgImage>
  );
};

export default FullscreenImageTeaser;
