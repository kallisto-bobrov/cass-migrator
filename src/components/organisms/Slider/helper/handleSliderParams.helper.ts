import get from 'lodash/get';
import type { SliderParamsType } from '../__types__/Slider.type';

const handleSliderParams = (
  settings: SliderParamsType,
  showPagination: boolean,
) => {
  let autoplay = {};
  let pagination = {};
  let navigation = {};
  let slidesPerView = 1;
  let spaceBetween = 0;
  let breakpoints = {};
  const loop = get(settings, 'loop', undefined);

  if (get(settings, 'autoplay', undefined)) {
    autoplay = {
      delay: 4000,
      disableOnInteraction: true,
    };
  }

  if (get(settings, 'pagination', undefined) && showPagination) {
    pagination = {
      // el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    };
  } else {
    pagination = false;
  }

  if (get(settings, 'navigation', undefined)) {
    navigation = {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    };
  }

  if (get(settings, 'slidesPerView', undefined)) {
    // eslint-disable-next-line prefer-destructuring
    slidesPerView = settings.slidesPerView!;
  }

  if (get(settings, 'spaceBetween', undefined)) {
    // eslint-disable-next-line prefer-destructuring
    spaceBetween = settings.spaceBetween!;
  }

  if (get(settings, 'breakpoints', undefined)) {
    // eslint-disable-next-line prefer-destructuring
    breakpoints = settings.breakpoints!;
  }

  return {
    loop,
    speed: 1000,
    effect: 'slide',
    pagination,
    navigation,
    autoplay,
    slidesPerView,
    spaceBetween,
    autoHeight: true,
    breakpoints,
  };
};

export default handleSliderParams;
