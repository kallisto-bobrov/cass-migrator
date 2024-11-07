import type { PrismicHeadline } from '../../../atoms/Headline/__types__/Headline.types';
import type { InternalLink } from '../../../atoms/Link/__types__/Link.type';

export type CornerTeaserContentBlockType = {
  headline?: PrismicHeadline;
  text?: Array<any>;
  chapter?: string;
  slices?: number;
  index?: number;
  link?: InternalLink;
  link_text?: string;
  link_title?: string;
  noHeadlineHighlight?: boolean;
  overline?: string;
  slider?: boolean;
};

export type CTCBHeadlineType = {
  chapter?: string;
  slices?: number;
  index?: number;
  headline?: PrismicHeadline;
  standAlone?: boolean;
};
