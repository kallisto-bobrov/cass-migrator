import React from 'react';
import get from 'lodash/get';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import uniqueId from 'lodash/uniqueId';
import styled, { css } from 'styled-components';
import type { SliderType } from './__types__/Slider.type';
import FullscreenImageTeaser from './components/FullscreenImageTeaser.Slider';
import elmStyleMap from '../../../constants/maps/elmStyle.map';
import positionSliderButtonsCss from './helper/positionSliderButtonsCss.helper';
import {
  NextButton,
  PrevButton,
  SliderButtons,
  SliderPagination,
} from './components/Controls.Slider';
import handleSliderParams from './helper/handleSliderParams.helper';
import ArticleTeaserSlide from './components/ArtikelTeaserSlide.Slider';
import TextImageSlide from './components/TextImageSlide.Slider';
import MediaSlide from './components/MediaSlide.Slider';
import mq from '@/styles/mediaQueries/mediaQueries';
import TestimonialSlide from '@/components/organisms/Slider/components/TestimonialSlide.Slider';

const SliderWrapper = styled.div<{
  $skin?: string;
  $itemsAmount?: number;
  $paddingBottom?: number;
  $navAlignment?: string;
}>`
  ${SliderPagination};
  ${SliderButtons};

  ${(props) => positionSliderButtonsCss(props.$skin)};
  ${(props) =>
    props.$itemsAmount! <= 1 &&
    css`
      .swiper-pagination,
      .cas-swiper-button-next,
      .cas-swiper-button-prev {
        display: none;
      }
    `}
  ${(props) =>
    props.$paddingBottom
      ? css`
          .swiper {
            padding-bottom: ${props.$paddingBottom}px;
          }
        `
      : ''}

  ${(props) =>
    props.$navAlignment === 'top' &&
    css`
      .cas-swiper-button-next,
      .cas-swiper-button-prev {
        bottom: auto;
        top: 0;

        @media (${mq.md}) {
          top: 188px;
        }

        @media (${mq.smDown}) {
          top: 88px;
        }
      }
    `}
  ${(props) =>
    props.$navAlignment === 'testimonials' &&
    css`
      .cas-swiper-button-next,
      .cas-swiper-button-prev {
        bottom: auto;
        top: 0;

        @media (${mq.md}) {
          top: 105px;
        }

        @media (${mq.smDown}) {
          top: 105px;
        }
      }
    `}
`;

const SLIDER_CONTENT = {
  [elmStyleMap.fullscreenTeaser]: FullscreenImageTeaser,
  [elmStyleMap.articleTeaserSlide]: ArticleTeaserSlide,
  [elmStyleMap.divided]: TextImageSlide,
  [elmStyleMap.mediaSlider]: MediaSlide,
  [elmStyleMap.testimonial]: TestimonialSlide,
};

const Slider = ({
  items,
  className,
  sliderContentType,
  sliderSettings,
  paddingBottom,
  skin,
  navAlignment,
}: SliderType) => {
  const itemsAmount = items.length;

  const swiperModules = [];

  if (sliderSettings.navigation) {
    swiperModules.push(Navigation);
  }
  if (sliderSettings.pagination) {
    swiperModules.push(Pagination);
  }

  const showNavAndPagination =
    items.length > (sliderSettings.slidesPerView || 1)!;
  return (
    <SliderWrapper
      className={className}
      $itemsAmount={itemsAmount}
      $paddingBottom={paddingBottom}
      $skin={skin}
      $navAlignment={navAlignment}
    >
      <Swiper
        modules={swiperModules}
        {...handleSliderParams(sliderSettings, showNavAndPagination)}
      >
        {items &&
          items[0] &&
          items.map((item) => {
            if (sliderContentType === elmStyleMap.articleTeaserSlide) {
              const hasTarget = get(item, 'zielseite.data', null);
              if (
                !hasTarget &&
                get(item, 'slice_teaser_text', null)?.length === 0
              ) {
                return null;
              }
            }
            return (
              <SwiperSlide key={uniqueId('slider_')}>
                {React.createElement(
                  // @ts-ignore
                  get(
                    SLIDER_CONTENT,
                    sliderContentType,
                    SLIDER_CONTENT[elmStyleMap.fullscreenTeaser],
                  ),
                  { item },
                  undefined,
                )}
              </SwiperSlide>
            );
          })}
        {showNavAndPagination ? (
          <>
            <PrevButton />
            <NextButton />
          </>
        ) : null}
      </Swiper>
    </SliderWrapper>
  );
};

export default Slider;
