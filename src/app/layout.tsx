import { GoogleTagManager } from '@next/third-parties/google';

import type { Metadata, Viewport } from 'next';
import StyledComponentsRegistry from '@/app/lib/registry';
import HeaderServer from '@/components/organisms/Header/Header.server';
import ThemeWrapper from '@/app/lib/themeWrapper';
import { createClient } from '@/prismicio';
import { filter } from '@prismicio/client';
import FooterServer from '@/components/organisms/Footer/Footer.server';
import React from 'react';
import CookiebotDialog from '@/tools/CookiebotDialog/CookiebotDialog';
import Script from 'next/script';
import CookieBot from '@/tools/CookieBot/CookieBot';
import defaultTheme from '@/styles/themes/defaultTheme/defaultTheme.styles';
import MetaSocial from '@/components/siteframes/MetaSocial/MetaSocial';
import LinkedIn from '@/components/siteframes/LinkedIn/LinkedIn';
import { Main } from '@/components/atoms/Main/Main';
import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '@/prismicio';
import MicrosoftBingAds from '@/components/siteframes/MicrosoftBingAds/MicrosoftBingAds';

export const metadata: Metadata = {
  formatDetection: { telephone: false },
  other: {
    google: 'notranslate',
    'msapplication-tap-highlight': 'no',
    'apple-mobile-web-app-status-bar-style': 'Black-translucent',
    'msapplication-TileColor': '#fff',
  },
};

export const viewport: Viewport = {
  themeColor: defaultTheme.color.primary800 || '#2CC700',
  width: 'device-width',
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const client = createClient();
  const globalConfig = await client.getByType('config', {
    filters: [filter.at('document.tags', ['cassini'])],
  });
  return (
    <html lang="de">
      <GoogleTagManager gtmId="GTM-W6WJ2GP" />
      <body>
        <StyledComponentsRegistry>
          <ThemeWrapper globalConfig={globalConfig.results[0].data}>
            <HeaderServer globalConfig={globalConfig.results[0].data} />
            <Main>{children}</Main>
            <FooterServer globalConfig={globalConfig.results[0].data} />
          </ThemeWrapper>
        </StyledComponentsRegistry>
        <CookieBot />
        <CookiebotDialog />
        <Script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js-eu1.hs-scripts.com/144554516.js"
          data-cookieconsent="statistics"
          strategy="beforeInteractive"
        />
        <LinkedIn />
        <MetaSocial />
        <MicrosoftBingAds />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
