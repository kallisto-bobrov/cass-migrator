import React from 'react';
import get from 'lodash/get';
import Head from 'next/head';
import type { MetaMainType } from './__types__/MetaTypes.type';
import MetaTags from './Tags.Meta';

const Meta = ({ metaSeo, metaSharing, theme, serverReqUrl }: MetaMainType) => (
  <Head>
    <title>{get(metaSeo, 'seo_meta_title', null)}</title>
    <MetaTags
      metaSeo={metaSeo}
      metaSharing={metaSharing}
      theme={theme}
      serverReqUrl={serverReqUrl}
    />
  </Head>
);

export default Meta;
