import React from 'react';
import uniqueId from 'lodash/uniqueId';
import styled from 'styled-components';
import type { YoUTubeVideoType } from './__types__/Video.type';
import cookieBotCheckVideo from './cookieBotCheckVideo';

const Wrapper = styled.div`
  position: relative;
  height: 0;
  max-width: 100%;
  padding-top: 56.25%;

  iframe {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Video = ({ embedUrl }: YoUTubeVideoType) => {
  const videoID = embedUrl.substring(embedUrl.indexOf('=') + 1);
  const src = `https://www.youtube-nocookie.com/embed/${videoID}?rel=0`;

  return (
    <Wrapper>
      <iframe
        title={uniqueId('video_')}
        src={src}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </Wrapper>
  );
};

export default cookieBotCheckVideo(Video);
