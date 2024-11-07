import type { PrismicPictureType } from '../../../atoms/Picture/__types__/Picture.type';
import type { PrismicHeadline } from '../../../atoms/Headline/__types__/Headline.types';

import type { InternalLink } from '../../../atoms/Link/__types__/Link.type';
import { DocumentLink } from '../../../atoms/Link/__types__/Link.type';

export type EinleitungPrimaryType = {
  ankerlink_titel?: string;
  dachzeile?: string;
  bild?: PrismicPictureType;
  uberschrift: Array<PrismicHeadline>;
  text: Array<any>;
  button_text?: string;
  button_url?: InternalLink;
  button_title?: string;
  video_url_mobile: DocumentLink;
  video_url_desktop: DocumentLink;
};

export type EinleitungSliceType = {
  primary: EinleitungPrimaryType;
  amIfirst: boolean;
};
