import React, { Fragment } from 'react';
import get from 'lodash/get';
import type { MetaMainType } from './__types__/MetaTypes.type';

const MetaTags = ({
  metaSeo,
  metaSharing,
  theme,
  serverReqUrl,
}: MetaMainType) => (
  <Fragment>
    <meta
      content={get(metaSeo, 'seo_meta_description', null)!}
      name="description"
    />
    {!get(metaSeo, 'seo_meta_canonical', null)! && (
      <meta
        name="robots"
        content={`${get(metaSeo, 'seo_meta_index', null)! === 'true' ? 'index' : 'noindex'},${get(metaSeo, 'seo_meta_follow', null)! === 'true' ? 'follow' : 'nofollow'}`}
      />
    )}
    {get(metaSeo, 'seo_meta_canonical', null)! && (
      <link rel="canonical" href={metaSeo.seo_meta_canonical} />
    )}
    <meta name="format-detection" content="telephone=no" />
    <meta name="google" content="notranslate" />
    <meta name="msapplication-tap-highlight" content="no" />
    <meta
      name="apple-mobile-web-app-status-bar-style"
      content="Black-translucent"
    />
    <meta name="twitter:card" content="summary" />
    <meta
      name="twitter:site"
      content={get(metaSharing, 'twitter_site', null)!}
    />
    <meta
      name="twitter:title"
      content={
        get(metaSharing, 'twitter_title', null)!
          ? get(metaSharing, 'twitter_title', null)!
          : get(metaSeo, 'seo_meta_title', null)!
      }
    />
    <meta
      name="twitter:description"
      content={
        get(metaSharing, 'twitter_description', null)!
          ? get(metaSharing, 'twitter_description', null)!
          : get(metaSeo, 'seo_meta_description', null)!
      }
    />
    <meta
      property="og:title"
      content={
        get(metaSharing, 'og_title', null)!
          ? get(metaSharing, 'og_title', null)!
          : get(metaSeo, 'seo_meta_title', null)!
      }
    />
    <meta
      property="og:type"
      content={
        get(metaSharing, 'og_type', null)!
          ? get(metaSharing, 'og_type', null)!
          : 'article'
      }
    />
    <meta property="og:url" content={serverReqUrl} />
    <meta
      property="og:image"
      content={get(metaSharing, 'og_image.url', null)!}
    />
    <meta
      property="og:image:width"
      content={
        get(metaSharing, 'og_image.dimensions.width', null)!
          ? get(metaSharing, 'og_image.dimensions.width', null)!
          : '1200'
      }
    />
    <meta
      property="og:image:height"
      content={
        get(metaSharing, 'og_image.dimensions.height', null)!
          ? get(metaSharing, 'og_image.dimensions.height', null)!
          : '627'
      }
    />
    <meta
      property="og:description"
      content={
        get(metaSharing, 'og_description', null)!
          ? get(metaSharing, 'og_description', null)!
          : get(metaSeo, 'seo_meta_description', null)!
      }
    />
    <meta
      property="og:site_name"
      content={get(metaSharing, 'og_site_name', null)!}
    />
    <meta
      property="og:locale"
      content={
        get(metaSharing, 'og_locale', null)!
          ? get(metaSharing, 'og_locale', null)!
          : 'de_DE'
      }
    />
    <meta name="msapplication-TileColor" content="#fff" />
    <meta name="theme-color" content={theme.color.primary800} />
  </Fragment>
);

export default MetaTags;
