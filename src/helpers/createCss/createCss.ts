import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';
import type { BgImageSingleType } from '@/components/organisms/BgImage/__types__/BgImage.type';
import elmStyleMap from '../../constants/maps/elmStyle.map';
import { css } from 'styled-components';

export const createBgImageWrapperCss = (images: BgImageSingleType[]) => {
  return (
    !isEmpty(images) &&
    images.map(
      (image) => css`
        @media (${get(image, 'bp', null)}) {
          height: ${get(image, 'fullscreen', null) ? '100vh' : 'auto'};
        }
      `,
    )
  );
};

export const createContainerWrapperCss = (images: BgImageSingleType[]) => {
  const styledCode =
    !isEmpty(images) &&
    images.map(
      (image) => css`
        @media (${get(image, 'bp', null)}) {
          padding-bottom: ${get(image, 'fullscreen', null) ? '0' : '20px'};
          background: ${get(image, 'fullscreen', null) ? 'none' : ''};
          margin-top: ${get(image, 'fullscreen', null) ? '0' : '-100px'};
        }
      `,
    );

  return styledCode;
};

export const createChildWrapperCss = (
  images: BgImageSingleType[],
  elmStyle?: string,
) => {
  return (
    !isEmpty(images) &&
    images.map((image) => {
      switch (elmStyle) {
        case elmStyleMap.fullscreenTeaser:
          return css`
            @media (${get(image, 'bp', null)}) {
              position: ${get(image, 'fullscreen', null)
                ? 'absolute'
                : 'relative'};
              top: 0;
              left: 0;
            }
          `;
        default:
          return css`
            @media (${get(image, 'bp', null)}) {
              position: ${get(image, 'fullscreen', null)
                ? 'absolute'
                : 'relative'};
              top: ${get(image, 'fullscreen', null) ? '50vh' : '0'};
              transform: translateY(
                ${get(image, 'fullscreen', null) ? '-50%' : '0'}
              );
            }
          `;
      }
    })
  );
};

export const createImageWrapperCss = (images: BgImageSingleType[]) => {
  return (
    !isEmpty(images) &&
    images.map((image) => {
      const wrapperHeight = get(image, 'customImgHeight', null)
        ? `${get(image, 'customImgHeight', null)}px`
        : 'auto';
      const imageHeight = get(image, 'customImgHeight', null) ? '100%' : 'auto';

      return css`
        @media (${get(image, 'bp', null)}) {
          position: ${get(image, 'fullscreen', null) ? 'absolute' : 'relative'};
          height: ${get(image, 'fullscreen', null)
            ? '100vh'
            : `${wrapperHeight}`};

          img {
            height: auto;
            width: 100%;
          }

          @supports (object-fit: cover) {
            img {
              height: ${get(image, 'fullscreen', null)
                ? '100%'
                : `${imageHeight}`};
              width: 100%;
              object-fit: cover;
            }
          }
        }
      `;
    })
  );
};
