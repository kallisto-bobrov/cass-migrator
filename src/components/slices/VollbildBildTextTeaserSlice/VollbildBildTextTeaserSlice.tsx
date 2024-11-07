import React from 'react';
import get from 'lodash/get';
import BgImage from '../../organisms/BgImage/BgImage';
import elmStyleMap from '../../../constants/maps/elmStyle.map';
import CornerTeaserContentBlock from '../../molecules/CornerTeaserContentBlock/CornerTeaserContentBlock';
import type { VollbildBildTextTeaserSliceType } from './__types__/VollbildBildTextTeaserSlice.type';
import mq from '@/styles/mediaQueries/mediaQueries';

const VollbildBildTextTeaserSlice = ({
  primary,
  slices,
  index,
}: VollbildBildTextTeaserSliceType) => {
  const headline: any = get(
    primary,
    'zielseite.data.teaser_uberschrift[0]',
    null,
  );
  if (headline) headline.type = 'heading2';
  return (
    <div id={get(primary, 'ankerlink_titel', null)!}>
      <BgImage
        {...{
          images: [
            {
              bp: mq.lgUp,
              url: get(primary, 'zielseite.data.teaser_bild.url', undefined),
              dimensions: get(
                primary,
                'zielseite.data.teaser_bild.dimensions',
                null,
              )!,
              fullscreen: true,
            },
            {
              bp: mq.smTillmd,
              url: get(primary, 'zielseite.data.teaser_bild.MD.url', undefined),
              dimensions: get(
                primary,
                'zielseite.data.teaser_bild.MD.dimensions',
                null,
              )!,
              fullscreen: false,
            },
            {
              bp: mq.xs,
              url: get(primary, 'zielseite.data.teaser_bild.XS.url', undefined),
              dimensions: get(
                primary,
                'zielseite.data.teaser_bild.XS.dimensions',
                null,
              )!,
              fullscreen: false,
            },
          ],
          title: get(primary, 'zielseite.data.teaser_bild_titel', undefined),
          scrollIndicator: false,
          elmStyle: elmStyleMap.fullscreenTeaser,
        }}
      >
        <CornerTeaserContentBlock
          headline={headline}
          text={get(primary, 'zielseite.data.teaser_text', undefined)}
          chapter={get(primary, 'kapitel', undefined)}
          slices={slices}
          index={index}
          link={get(primary, 'zielseite', undefined)}
          link_text={get(primary, 'zielseite.data.teaser_link_text', undefined)}
          link_title={get(
            primary,
            'zielseite.data.teaser_link_title',
            undefined,
          )}
        />
      </BgImage>
    </div>
  );
};

export default VollbildBildTextTeaserSlice;
