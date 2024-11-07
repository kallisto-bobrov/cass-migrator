import type {
  ExternalLink,
  InternalLink,
} from '../../../atoms/Link/__types__/Link.type';

export const AD_BANNER_TYPES_MAP = {
  fixed: 'fixed',
  relative: 'relative',
};

export const AD_BANNER_COLORS_MAP = {
  dark: 'dark',
  brand: 'brand',
};

export const AD_BANNER_ICONS_MAP = {
  newsletter: 'newsletter',
};

export type AdBannerType = {
  headline?: string;
  text: any;
  ctaLink: InternalLink | ExternalLink;
  ctaText: string;
  ctaTitle: string;
  color: string;
  icon: string;
  type: string;
};

export type StickyElmType = {
  ctaLink: InternalLink | ExternalLink;
  ctaTitle: string;
  color: string;
  icon: string;
  adBannerLayoutSwitchMQ: string;
  type: string;
  offsetTop: number;
  mainBannerIsVisible: boolean;
};
