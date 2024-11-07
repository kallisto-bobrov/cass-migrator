import React from 'react';
import Script from 'next/script';

const MicrosoftBingAds = () => {
  return (
    <Script
      id={`microsoft-bing-ads`}
      data-cookieconsent="statistics"
      type="text/plain"
    >
      {`
        (function(w,d,t,r,u)
          {
            var f,n,i;
            w[u]=w[u]||[],f=function()
            {
              var o={ti:"97060197", enableAutoSpaTracking: true};
              o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")
            },
            n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function()
            {
              var s=this.readyState;
              s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)
            },
            i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)
          })
          (window,document,"script","//bat.bing.com/bat.js","uetq");
      `}
    </Script>
  );
};

export default MicrosoftBingAds;
