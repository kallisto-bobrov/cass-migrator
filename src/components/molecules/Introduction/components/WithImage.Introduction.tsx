import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import Picture from '../../../atoms/Picture/Picture';
import MainTeaserContentBlock from '../../MainTeaserContentBlock/MainTeaserContentBlock';
import type { WithImageType } from '../__types__/Introduction.type';
import mq from '@/styles/mediaQueries/mediaQueries';
import { BreakpointContext } from '@/helpers/breakpoints/context/breakpoint.context';
import { mdDown } from '@/helpers/breakpoints/checkBreakpoints.helper';

const ImageWrapper = styled.div<{ $hasImage: string | false }>`
  position: relative;
  padding: ${(props) => (props.$hasImage ? '200px 0 0' : 0)};
  margin-bottom: 15px;

  @media (${mq.xs}) {
    padding: ${(props) => (props.$hasImage ? '80px 0 0' : 0)};
  }
`;

const PictureStyled = styled(Picture)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const VideoStyled = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
const IntroWithImage = ({
  image,
  overline,
  headline,
  className,
  videoMobile,
  videoDesktop,
}: WithImageType) => {
  const heading = headline;
  const breakpoint = useContext(BreakpointContext);
  const [videoURL, setVideoURl] = useState('');

  if (heading && heading.type) {
    heading.type = 'heading1';
  }

  useEffect(() => {
    if (
      !videoMobile ||
      !videoDesktop ||
      (!(videoMobile.media === 'Media') && !(videoDesktop.media === 'Media'))
    )
      return;

    if (mdDown(breakpoint) && videoMobile.url) {
      setVideoURl(videoMobile.url);
    } else {
      setVideoURl(videoDesktop.url);
    }
  }, []);

  return (
    <ImageWrapper $hasImage={get(image, 'url', false)} className={className}>
      {!isEmpty(image) && !videoDesktop!.url && (
        <PictureStyled image={image} objectFit />
      )}
      {videoDesktop!.url && (
        <VideoStyled
          controls={false}
          autoPlay
          loop
          muted
          src={videoURL}
          playsInline
        />
      )}
      <MainTeaserContentBlock
        {...{
          dachzeile: overline,
          uberschrift: headline,
          fullWidth: true,
          hasImage: !!get(image, 'url', false),
        }}
      />
    </ImageWrapper>
  );
};

export default IntroWithImage;
