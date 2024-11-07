import type { PrismicHeadline } from '../../../atoms/Headline/__types__/Headline.types';
import type {
  ExternalLink,
  InternalLink,
} from '../../../atoms/Link/__types__/Link.type';
import type { LocationDataBlockType } from './LocationDataBlock.type';

export type FooterNavItem = {
  link_text: string;
  link_title: string;
  link_target: '_self' | '_blank';
  url: InternalLink | ExternalLink;
};

export type FooterType = {
  display_name: Array<PrismicHeadline>;
  copyright_text?: string;
  homepage_link: InternalLink;
  navigation: Array<FooterNavItem>;
  sm_headline?: string;
  locations_headline1?: string;
  locations_cta_text?: string;
};

export type FooterMainType = {
  footer: FooterType;
  globalConfig: any;
};

export type FooterDivider = {
  margin?: string;
  className?: string;
};

export type FooterLocationType = {
  headline?: string;
  locations?: Array<LocationDataBlockType>;
  ctaText?: string;
};

export type ChannelLink = {
  url: ExternalLink;
};

export type FooterSocialMedia = {
  headline?: string;
  channels?: Array<ChannelLink>;
};

export type FooternavigationType = {
  copyright_text?: string;
  homepage_link: InternalLink;
  navigationItems: Array<FooterNavItem>;
};
