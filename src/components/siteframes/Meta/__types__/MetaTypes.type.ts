import type { DefaultTheme } from 'styled-components';

export type MetaSeoTypes = {
  seo_meta_title?: string;
  seo_meta_description?: string;
  seo_meta_index?: 'true' | 'false';
  seo_meta_follow?: 'true' | 'false';
  seo_meta_canonical?: string;
};

type Dimensions = {
  width?: string;
  height?: string;
};

type Image = {
  dimensions?: Dimensions;
  url?: string;
};

export type MetaSharingTypes = {
  twitter_title?: string;
  twitter_description?: string;
  og_title?: string;
  og_type?: string;
  og_description?: string;
  og_locale?: string;
  og_image?: Image;
  twitter_site?: string;
  og_site_name?: string;
};

export type MetaMainType = {
  metaSeo: MetaSeoTypes;
  metaSharing: MetaSharingTypes;
  theme: DefaultTheme;
  serverReqUrl: string;
};
