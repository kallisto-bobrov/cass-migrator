import type { InternalLink } from '../../../atoms/Link/__types__/Link.type';
import type { PrismicPictureType } from '../../../atoms/Picture/__types__/Picture.type';
import { DocumentLink } from '../../../atoms/Link/__types__/Link.type';

export type BuehnePrimary = {
  ankerlink_titel: string;
  hintergrundbild: PrismicPictureType;
  hintegrundbild_titel: string;
  button_text: string;
  button_url: InternalLink;
  ankerlink_ziel?: string;
  button_title: string;
  ubergangsanimation: string;
  video_url_mobile: DocumentLink;
  video_url_desktop: DocumentLink;
};

export type BuehneSliceType = {
  primary: BuehnePrimary;
};
