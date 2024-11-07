import React from 'react';
import 'jest-styled-components';
import { createImageWrapperCss } from './createCss';
import mq from '../../constants/styles/mediaQueries/mediaQueries';

const imagesWithCustomHeightMock = [
  {
    bp: mq.lgUp,
    url: 'https://images.prismic.io/irgendeine.jpg',
    dimensions: {
      height: 100,
      width: 100,
    },
    fullscreen: true,
  },
  {
    bp: mq.smTillmd,
    url: 'https://images.prismic.io/irgendeine.jpg',
    dimensions: {
      height: 100,
      width: 100,
    },
    fullscreen: false,
    customImgHeight: 427,
  },
  {
    bp: mq.xs,
    url: 'https://images.prismic.io/irgendeine.jpg',
    dimensions: {
      height: 100,
      width: 100,
    },
    fullscreen: false,
    customImgHeight: 236,
  },
];

const expectedIfCustomHeight = [
  `
      @media (min-width: 992px) {
        position: absolute;
        height: 100vh;

        img {
          height: auto;
          width: 100%;
        }

        @supports (object-fit: cover) {
          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
        }
      }
   ",
 "

      @media (min-width: 576px) and (max-width: 991px) {
        position: relative;
        height: 427px;

        img {
          height: auto;
          width: 100%;
        }

        @supports (object-fit: cover) {
          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
        }
   ",
 "

      @media (max-width: 575px) {
        position: relative;
        height: 236px;

        img {
          height: auto;
          width: 100%;
        }

        @supports (object-fit: cover) {
          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
        }
   ",
 "

`,
];

describe('createCSS', () => {
  it('createImageWrapperCss with customHeight', () => {
    expect(createImageWrapperCss(imagesWithCustomHeightMock)).toEqual(
      expectedIfCustomHeight,
    );
  });
});
