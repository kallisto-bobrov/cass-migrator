import React from 'react';
import { css } from 'styled-components';
import ControlElm, {
  arrowControlWidth,
} from '../../../atoms/Controls/Controls';
import mq from '@/styles/mediaQueries/mediaQueries';
import { useSwiper } from 'swiper/react';

export const SliderPagination = css`
  .swiper-pagination {
    position: absolute;
    display: flex;
    justify-content: center;
    margin-top: 10px;
    transition: opacity 300ms;
    transform: translate3d(0px, 0px, 0px);
    z-index: 10;
    bottom: 10px;
    width: 100%;

    @media (${mq.mdDown}) {
      display: none;
    }
  }
  .swiper-pagination-bullet {
    cursor: pointer;
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background: ${(props) => props.theme.color.white};
    opacity: 1;
    margin: 0 4px;

    @media (${mq.mdDown}) {
      display: none;
    }
  }

  .swiper-pagination-bullet-active {
    background: ${(props) => props.theme.color.secondary900};
  }
`;

export const SliderButtons = css`
  .cas-swiper-button-next,
  .cas-swiper-button-prev {
    position: absolute;
    right: 0;
    left: auto;
    background-image: none;
    margin-top: 0;
    z-index: 9997;

    &:focus {
      outline: none;
    }
  }

  .cas-swiper-button-prev {
    transform: rotate(180deg);
    right: ${`${arrowControlWidth + 5}px`};

    @media (${mq.mdDown}) {
      right: auto;
      left: 0;
    }
  }

  .swiper-button-disabled {
    opacity: 0.5;
  }
`;

export const PrevButton = () => {
  const swiper = useSwiper();
  return (
    <ControlElm
      onClick={() => swiper.slidePrev()}
      className="cas-swiper-button-prev"
    />
  );
};

export const NextButton = () => {
  const swiper = useSwiper();
  return (
    <ControlElm
      onClick={() => swiper.slideNext()}
      className="cas-swiper-button-next"
    />
  );
};
