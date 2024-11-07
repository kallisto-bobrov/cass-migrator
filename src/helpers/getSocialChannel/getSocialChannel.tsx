import React from 'react';
import Icon from '../../components/atoms/Icons/Icon';
import type { ChannelLink } from '@/components/organisms/Footer/__types__/Footer.type';

const socialChannels = [
  'twitter',
  'facebook',
  'xing',
  'linkedin',
  'youtube',
  'kununu',
  'spotify',
  'instagram',
];

const getSocialChannel = (channel: ChannelLink) => {
  const { url } = channel.url;

  let channelName = '';

  socialChannels.map((item) => {
    if (url && url.indexOf(item) !== -1) {
      channelName = item;
    }
    return false;
  });

  return (
    <>
      {url && (
        <a
          href={url}
          title={channelName}
          rel="noreferrer noopener"
          target="_blank"
        >
          <Icon icon={`cassini-${channelName}`} />
        </a>
      )}
    </>
  );
};

export default getSocialChannel;
