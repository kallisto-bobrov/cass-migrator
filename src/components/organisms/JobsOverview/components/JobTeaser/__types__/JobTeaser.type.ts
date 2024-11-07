import { PrismicHeadline } from '@/components/atoms/Headline/__types__/Headline.types';
import {
  ExternalLink,
  InternalLink,
} from '@/components/atoms/Link/__types__/Link.type';

export type JobTeaserType = {
  teaser_uberschrift?: PrismicHeadline[];
  teaser_link_text?: string;
  teaser_link_title?: string;
  teaser_locations?: string;
  link?: InternalLink | ExternalLink;
};
