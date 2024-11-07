import type { PrismicHeadline } from '../../../atoms/Headline/__types__/Headline.types';

import type { PrismicPictureType } from '../../../atoms/Picture/__types__/Picture.type';

import type {
  ExternalLink,
  InternalLink,
} from '../../../atoms/Link/__types__/Link.type';

export type CTAteaserSlicePrimaryType = {
  headline: PrismicHeadline;
  text: Array<any>;
  bild_position?: 'links' | 'rechts';
  textgrosse?: string;
  bild?: PrismicPictureType;
  ankerlink_titel: string | null;
  button_text: string | null;
  button_title: string | null;
  externe_url: ExternalLink;
  ankerlink_ziel: string | null;
  zielseite: InternalLink;
};

export type CTAteaserSliceType = {
  primary: CTAteaserSlicePrimaryType;
  slices: number;
  index: number;
};
