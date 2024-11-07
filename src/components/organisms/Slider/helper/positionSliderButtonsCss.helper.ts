import elmStyleMap from '../../../../constants/maps/elmStyle.map';
import mq from '@/styles/mediaQueries/mediaQueries';
import { css } from 'styled-components';

const positionSliderButtonsCss = (skin?: string) => {
  let top = '0';
  let bottom = 'auto';

  switch (skin) {
    case elmStyleMap.mediaSlider:
      top = '200px';
      bottom = 'auto';
      break;
    case elmStyleMap.articleTeaser:
      top = 'auto';
      bottom = '0';
      break;
    default:
      top = '0';
      bottom = 'auto';
      break;
  }

  const styledCode = css`
    .cas-swiper-button-next,
    .cas-swiper-button-prev {
      bottom: ${bottom};
      top: ${top};

      @media (${mq.mdDown}) {
        bottom: auto;
        top: ${skin === elmStyleMap.articleTeaser ? '70px' : '165px'};
      }

      @media (${mq.smDown}) {
        bottom: auto;
        top: ${skin === elmStyleMap.articleTeaser ? '41px' : '141px'};
      }

      @media (${mq.xs}) {
        bottom: auto;
        top: 90px;
      }
    }

    .cas-swiper-button-prev {
      left: ${skin === elmStyleMap.mediaSlider ? '0' : 'auto'};
    }
  `;

  return styledCode;
};

export default positionSliderButtonsCss;
