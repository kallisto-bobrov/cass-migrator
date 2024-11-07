import React, { useContext, useEffect, useState } from 'react';
import isEmpty from 'lodash/isEmpty';
import uniqueId from 'lodash/uniqueId';
import get from 'lodash/get';
import styled, { css } from 'styled-components';
import { BgImageSingleType, BgImageType } from './__types__/BgImage.type';
import ScrollIndicator from '../../atoms/ScrollIndicator/ScrollIndicator';
import {
  createBgImageWrapperCss,
  createImageWrapperCss,
} from '@/helpers/createCss/createCss';
import elmStyleMap from '../../../constants/maps/elmStyle.map';
import StageContent from './components/Stage.BgImage';
import FullscreenTeaserContent from './components/FullscreenTeaser.BgImage';
import { BreakpointContext } from '@/helpers/breakpoints/context/breakpoint.context';
import { mdDown } from '@/helpers/breakpoints/checkBreakpoints.helper';

const BgImageWrapper = styled.div<{ $images: Array<BgImageSingleType> }>`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  ${(props) => createBgImageWrapperCss(props.$images)};
  overflow: hidden;
`;

const ImageWrapper = styled.div<{
  $images: Array<BgImageSingleType>;
  $elmStyle?: string;
}>`
  width: 100%;
  position: relative;

  ${(props) =>
    props.$elmStyle === elmStyleMap.fullscreenTeaser &&
    css`
      order: 2;
    `}

  ${(props) => createImageWrapperCss(props.$images)};
`;

const VideoStyled = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const CONTENT_BLOCK_WRAPPER = {
  [elmStyleMap.stage]: StageContent,
  [elmStyleMap.fullscreenTeaser]: FullscreenTeaserContent,
  [elmStyleMap.slider]: FullscreenTeaserContent,
};

const BgImage = ({
  images = [],
  videoMobile,
  videoDesktop,
  title = '',
  children,
  scrollIndicator = false,
  elmStyle = elmStyleMap.stage,
}: BgImageType) => {
  const breakpoint = useContext(BreakpointContext);
  const [videoURL, setVideoURl] = useState('');

  useEffect(() => {
    if (
      !videoMobile ||
      !videoDesktop ||
      (videoMobile.link_type !== 'Media' && videoDesktop.link_type !== 'Media')
    ) {
      return;
    }

    if (mdDown(breakpoint) && videoMobile.url) {
      setVideoURl(videoMobile.url);
    } else {
      setVideoURl(videoDesktop.url);
    }
  }, []);
  return (
    <BgImageWrapper $images={images}>
      <ImageWrapper $elmStyle={elmStyle} $images={images}>
        {!isEmpty(images) && !videoDesktop?.url ? (
          <picture>
            {images.map((image) => (
              <source
                media={`(${image.bp})`}
                srcSet={image.url}
                key={uniqueId()}
              />
            ))}
            <img
              width={images[0].dimensions?.width}
              height={images[0].dimensions?.height}
              src={images[0].url}
              alt={title}
            />
          </picture>
        ) : null}
        {videoDesktop?.url && (
          <VideoStyled
            controls={false}
            autoPlay
            loop
            muted
            src={videoURL}
            playsInline
          />
        )}
      </ImageWrapper>
      {React.createElement(
        get(
          CONTENT_BLOCK_WRAPPER,
          elmStyle,
          CONTENT_BLOCK_WRAPPER[elmStyleMap.stage],
        ),
        { images },
        children,
      )}
      {scrollIndicator && <ScrollIndicator />}
    </BgImageWrapper>
  );
};

export default BgImage;
