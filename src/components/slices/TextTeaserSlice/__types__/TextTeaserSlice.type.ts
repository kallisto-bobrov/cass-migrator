import type { PrismicHeadline } from '../../../atoms/Headline/__types__/Headline.types';

import type {
  DocumentLink,
  InternalLink,
} from '../../../atoms/Link/__types__/Link.type';
import type { PrismicPictureType } from '../../../atoms/Picture/__types__/Picture.type';
import { ExternalLink } from '../../../atoms/Link/__types__/Link.type';

export type TextTeaserSlicePrimaryType = {
  ankerlink_titel: string;
  kapitel: string;
  uberschrift: Array<PrismicHeadline>;
  text: Array<any>;
  textgrosse?: string;
  text_color: 'standard' | 'primary';
  tag?: InternalLink;
  bild_klein?: PrismicPictureType;
  bild_medium?: PrismicPictureType;
  bild_gross?: PrismicPictureType;
  bild_position?: 'links' | 'rechts';
  verlinkung_bild_url?: ExternalLink | InternalLink | DocumentLink;
  verlinkung_link_titel?: string;
};

export type TextTeaserSliceItemsType = {
  teaser_farbe: string;
  zielseite: InternalLink;
};

export type TeaserContentType = {
  bgColor?: string;
  headline: PrismicHeadline;
  text: Array<any>;
  link_text: string;
  link_title?: string;
};

export type TextTeaserSliceType = {
  primary: TextTeaserSlicePrimaryType;
  items: Array<TextTeaserSliceItemsType>;
  slices: number;
  index: number;
};
