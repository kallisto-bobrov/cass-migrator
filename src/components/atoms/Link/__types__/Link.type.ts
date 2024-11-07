import { ReactNode } from 'react';
import { PrismicHeadline } from '@/components/atoms/Headline/__types__/Headline.types';
import { PrismicPictureType } from '@/components/atoms/Picture/__types__/Picture.type';
import { TimeStamp } from '@/components/molecules/EventTeaserTile/__type__/EventTeaserTile.type';
import { FactTileType } from '@/components/molecules/FactTile/__type__/FactTile.type';
import { QuoteType } from '@/components/molecules/Quote/__types__/Quote.type';
import { ArticleTeaserSlideType } from '@/components/organisms/Slider/__types__/Slider.type';

export type TeaserData = {
  teaser_dachzeile?: string;
  teaser_uberschrift?: PrismicHeadline;
  teaser_link_text?: string;
  teaser_text?: any;
  teaser_link_title?: string;
  teaser_bild?: PrismicPictureType;
  teaser_bild_title?: string;
  teaser_bild_16_9?: PrismicPictureType;
  teaser_bild_1_1?: PrismicPictureType;
  name?: string;
  position?: string;
  email?: string;
  linkedin?: string;
  xing?: string;
  twitter?: string;
  facebook?: string;
  portrait?: PrismicPictureType;
  bild_uberlagerung?: PrismicPictureType;
  bild_title_uberlagerung?: string;
  bildunterschrift_uberlagerung?: string;
  text_uberlagerung?: Array<any>;
  uberschrift_uberlagerung?: PrismicHeadline;
  event_schema_start_date?: TimeStamp;
  event_schema_end_date?: TimeStamp;
  event_schema_location_city?: string;
  event_schema_location_country?: string;
  teaser_locations?: string;
  tag?: string;
};

export type InternalLink = {
  target?: string;
  id: string;
  type: string;
  tags: [string];
  uid: string;
  link_type: 'Document';
  slug: string;
  isBroken: boolean;
  url: string;
  data?: TeaserData | FactTileType | QuoteType;
  item?: ArticleTeaserSlideType;
};

export type Query = {
  tag?: string;
  customType?: string;
};

export type ExternalLink = {
  link_type: 'Web';
  url: string;
  uid?: string;
  target?: string;
  type?: string;
};

export type DocumentLink = {
  kind?: 'document';
  link_type: 'Media';
  name?: string;
  size?: string;
  url: string;
  media?: string;
  target?: string;
  uid?: string;
  type?: string;
};

export type LinkWrapperType = {
  link_type?: 'Web' | 'Media' | 'Document';
  children: ReactNode;
  href: string;
  nextHref: string;
  uid?: string;
  pageType?: string;
  query?: Query;
};

export type LinkType = {
  link_type?: 'Web' | 'Media' | 'Document' | string;
  uid?: string;
  pageType?: string;
  children?: ReactNode;
  url?: string;
  nextHref?: string;
  className?: string;
  skin?: string;
  target?: string;
  title?: string;
  name?: string;
  query?: Query;
  isInsideRichtext?: boolean;
  anchor?: string;
  isBroken?: boolean;
  anchor_id?: string;
};
