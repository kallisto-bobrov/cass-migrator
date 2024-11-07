import type { PrismicPictureType } from '../../../atoms/Picture/__types__/Picture.type';
import type { PrismicHeadline } from '../../../atoms/Headline/__types__/Headline.types';

import type {
  ExternalLink,
  InternalLink,
} from '../../../atoms/Link/__types__/Link.type';

export type TextBoxType = {
  bild: PrismicPictureType;
  uberschrift: Array<PrismicHeadline>;
  text: Array<any>;
  zielseite: InternalLink | ExternalLink;
  zielseite_link_title?: string;
  zielseite_link_text?: string;
  ankerlink_ziel?: string;
  text_uberlagerung: Array<any>;
  textgrosse: string;
  bild_title?: string;
  bildunterschrift?: string;
  bgColor?: string;
  farbschema?: string;
  sliceName?: string;
};

export type TextBoxContentType = {
  headline?: PrismicHeadline;
  text: Array<any>;
  bgColor?: string;
};

export type TextBoxCtaType = {
  active: boolean;
  ctaType: string;
  bgColor?: string;
  className?: string;
  linkText?: string;
};
