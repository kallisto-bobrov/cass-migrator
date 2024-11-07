import React from 'react';
import uniqueId from 'lodash/uniqueId';
import type { SoundcloudType } from './__types__/Soundcloud.type';
import cookieBotCheckVideo from '../Video/cookieBotCheckVideo';

const Soundcloud = ({ embedUrl }: SoundcloudType) => (
  <iframe
    title={uniqueId('soundcloud_')}
    src={`https://w.soundcloud.com/player/?url=${embedUrl}&auto_play=false&buying=false&liking=false&download=false&sharing=false&show_artwork=false&show_comments=false&show_playcount=false&show_user=false&hide_related=false&visual=false&start_track=0&callback=true`}
    width="100%"
    scrolling="no"
    frameBorder="no"
  />
);

export default cookieBotCheckVideo(Soundcloud);
