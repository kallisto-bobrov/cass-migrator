import React, { useEffect, useState } from 'react';
import MapPlaceholder from './partials/MapPlaceholder';
import Col from '../../grid/Col/Col';
import isClient from '@/helpers/isClient/isClient.helper';

const cookieBotCheckMap = (WrappedComponent: any) => {
  // eslint-disable-next-line react/display-name
  return (props: any) => {
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
    return (
      <Col
        colAmount={{
          xl: 9,
          lg: 9,
          md: 8,
          sm: 6,
          xs: 12,
        }}
      >
        <MapPlaceholder />
      </Col>
    );
  };
};

export default cookieBotCheckMap;
