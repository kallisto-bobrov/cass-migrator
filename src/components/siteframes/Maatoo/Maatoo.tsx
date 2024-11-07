import React from 'react';
import Head from 'next/head';

const Maatoo = () => (
  <Head>
    <script
      key="maatoo-sdk"
      className="mautic-sdk-script"
      dangerouslySetInnerHTML={{
        __html: `
        var MauticSDKLoaded = true;
        var head            = document.getElementsByTagName('head')[0];
        var script          = document.createElement('script');
        script.type         = 'text/javascript';
        script.src          = 'https://cassini.maatoo.io/media/js/mautic-form.js';
        script.onload       = function() {
            MauticSDK.onLoad();
        };
        head.appendChild(script);
        var MauticDomain = 'https://cassini.maatoo.io';
        var MauticLang = {
          'submittingMessage': "Wird versendet..."
        };
        Array.from(document.getElementsByClassName('mautic-sdk-script')).forEach((scriptonHead) =>
          head.removeChild(scriptonHead)
        );
      `,
      }}
    />
  </Head>
);

export default Maatoo;
