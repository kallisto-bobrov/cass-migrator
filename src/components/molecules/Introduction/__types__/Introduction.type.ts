import type { PrismicHeadline } from '../../../atoms/Headline/__types__/Headline.types';

import type { PrismicPictureType } from '../../../atoms/Picture/__types__/Picture.type';
import type { InternalLink } from '../../../atoms/Link/__types__/Link.type';
import { DocumentLink } from '../../../atoms/Link/__types__/Link.type';

export type IntroductionType = {
  overline?: string;
  headline: PrismicHeadline;
  text: Array<any>;
  image?: PrismicPictureType;
  amIfirst: boolean;
  button_text?: string;
  button_url?: InternalLink;
  button_title?: string;
  video_url_mobile?: DocumentLink;
  video_url_desktop?: DocumentLink;
  videoMobile?: DocumentLink;
  videoDesktop?: DocumentLink;
};

export type WithImageType = {
  overline?: string;
  headline: PrismicHeadline;
  className?: string;
  image?: PrismicPictureType;
  videoMobile?: DocumentLink;
  videoDesktop?: DocumentLink;
};
