import React from 'react';
import get from 'lodash/get';
import type { BuehneSliceType } from './__types__/BuehneSlice.type';
import BgImage from '../../organisms/BgImage/BgImage';
import MainTeaserContentBlock from '../../molecules/MainTeaserContentBlock/MainTeaserContentBlock';
import mq from '@/styles/mediaQueries/mediaQueries';

const Buehne = ({ primary }: BuehneSliceType) => {
  return (
    <BgImage
      {...{
        images: [
          {
            bp: mq.lgUp,
            url: get(primary, 'hintergrundbild.url', null)!,
            dimensions: get(primary, 'hintergrundbild.dimensions', null)!,
            fullscreen: true,
          },
          {
            bp: mq.smTillmd,
            url: get(primary, 'hintergrundbild.MD.url', null)!,
            dimensions: get(primary, 'hintergrundbild.dimensions', null)!,
            fullscreen: false,
          },
          {
            bp: mq.xs,
            url: get(primary, 'hintergrundbild.XS.url', null)!,
            dimensions: get(primary, 'hintergrundbild.dimensions', null)!,
            fullscreen: false,
          },
        ],
        title: primary.hintegrundbild_titel,
        scrollIndicator: true,
        videoMobile: get(primary, 'video_url_mobile', undefined),
        videoDesktop: get(primary, 'video_url_desktop', undefined),
      }}
    >
      <MainTeaserContentBlock
        {...{
          dachzeile: get(primary, 'dachzeile', undefined),
          uberschrift: get(primary, 'uberschrift[0]', undefined),
          text: get(primary, 'text', undefined),
          button_text: get(primary, 'button_text', undefined),
          button_url: get(primary, 'button_url', undefined),
          ankerlink_ziel: get(primary, 'ankerlink_ziel', undefined),
          button_title: get(primary, 'button_title', undefined),
        }}
      />
    </BgImage>
  );
};

export default Buehne;
