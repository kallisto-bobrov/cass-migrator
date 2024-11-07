'use client';

import React, { useEffect } from 'react';
import Head from 'next/head';

export const cassiniCookiebotId = '16712f1b-cefa-4164-b52d-4285af96ed0e';

const CookieBot = () => {
  useEffect(() => {
    const cookiebotScript = document.getElementById('Cookiebot');
    if (!cookiebotScript) {
      const script = document.createElement('script');
      script.setAttribute('id', 'Cookiebot');
      script.async = true;
      script.src = 'https://consent.cookiebot.com/uc.js';
      script.setAttribute('data-cbid', cassiniCookiebotId);
      document.head.appendChild(script);
    }
  }, []);

  return (
    <Head>
      <script />
    </Head>
  );
};

export default CookieBot;
