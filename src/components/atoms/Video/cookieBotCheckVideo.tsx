import React, { useEffect, useState } from 'react';
import VideoPlaceholder from './partials/VideoPlaceholder';
import isClient from '@/helpers/isClient/isClient.helper';

// eslint-disable-next-line react/display-name
const cookieBotCheckVideo = (WrappedComponent: any) => (props: any) => {
  const [cookieAccepted, setCookieAccepted] = useState(false);

  useEffect(() => {
    const setCookiebot = () => {
      if (
        (window as unknown as any).Cookiebot &&
        (window as unknown as any).Cookiebot.consent &&
        (window as unknown as any).Cookiebot.consent.marketing
      ) {
        setCookieAccepted(true);
      }
    };

    window.addEventListener('CookiebotOnAccept', () => {
      setCookiebot();
    });

    setCookiebot();
  });

  if (WrappedComponent && isClient() && cookieAccepted) {
    return <WrappedComponent {...props} />;
  }
  return <VideoPlaceholder />;
};

export default cookieBotCheckVideo;
