import React from 'react';
import Script from 'next/script';

const LinkedIn = () => {
  return (
    <>
      <Script
        id={`linkedin-partner`}
        data-cookieconsent="statistics"
        type="text/plain"
      >{`
              _linkedin_partner_id = "6018769";
              window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
              window._linkedin_data_partner_ids.push(_linkedin_partner_id);
            `}</Script>
      <Script
        id={`linkedin-insight`}
        data-cookieconsent="statistics"
        type="text/plain"
      >{`
              (function(l) {
              if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[]}
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);})(window.lintrk);
            `}</Script>
    </>
  );
};

export default LinkedIn;
