import type { PrismicPictureType } from '../../../atoms/Picture/__types__/Picture.type';
import type { PrismicHeadline } from '../../../atoms/Headline/__types__/Headline.types';
import type { LinkType } from '../../../atoms/Link/__types__/Link.type';
import { ReactNode } from 'react';

export type OverlayType = {
  shouldOpen?: boolean;
  children: ReactNode;
  shouldClose: Function;
  bgColor?: string;
  showIcon?: boolean;
};

export type MainContentOverlayType = {
  text: Array<any>;
  textgrosse: string;
  bgColor?: string;
  bild_title?: string;
  bildunterschrift?: string;
  bild: PrismicPictureType;
  headline?: PrismicHeadline;
  cta?: LinkType;
  ctaText?: string;
  ctaTitle?: string;
  project?: string;
};
