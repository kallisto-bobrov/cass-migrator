import React from 'react';
import get from 'lodash/get';
import BgImage from '../../organisms/BgImage/BgImage';
import elmStyleMap from '../../../constants/maps/elmStyle.map';
import type { VollbildSliceType } from './__types__/VollbildSlice.type';
import mq from '@/styles/mediaQueries/mediaQueries';

const VollbildSlice = ({ primary }: VollbildSliceType) => {
  return (
    <div id={get(primary, 'ankerlink_titel', undefined)}>
      <BgImage
        {...{
          images: [
            {
              bp: mq.lgUp,
              url: get(primary, 'bild.url', undefined),
              dimensions: get(primary, 'bild.dimensions', undefined),
              fullscreen: true,
            },
            {
              bp: mq.smTillmd,
              url: get(primary, 'bild.MD.url', undefined),
              dimensions: get(primary, 'bild.MD.dimensions', undefined),
              fullscreen: false,
            },
            {
              bp: mq.xs,
              url: get(primary, 'bild.XS.url', undefined),
              dimensions: get(primary, 'bild.XS.dimensions', undefined),
              fullscreen: false,
            },
          ],
          title: get(primary, 'bild.alt', undefined),
          scrollIndicator: false,
          elmStyle: elmStyleMap.fullscreenTeaser,
        }}
      />
    </div>
  );
};

export default VollbildSlice;
