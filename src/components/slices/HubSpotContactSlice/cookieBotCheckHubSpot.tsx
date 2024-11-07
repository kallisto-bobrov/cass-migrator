import React, { useEffect, useState } from 'react';
import isClient from '@/helpers/isClient/isClient.helper';
import HubSpotPlaceholder from '@/components/slices/HubSpotContactSlice/partials/HubSpotPlaceholder';

const cookieBotCheckHubSpot = (WrappedComponent: any) => {
  // eslint-disable-next-line react/display-name
  return (props: any) => {
    const [cookieAccepted, setCookieAccepted] = useState(false);

    useEffect(() => {
      const setCookiebot = () => {
        if (
          window.Cookiebot &&
          window.Cookiebot.consent &&
          window.Cookiebot.consent.marketing
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
    return <HubSpotPlaceholder />;
  };
};

export default cookieBotCheckHubSpot;
