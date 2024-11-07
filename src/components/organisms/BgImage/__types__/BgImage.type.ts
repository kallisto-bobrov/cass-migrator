import { DocumentLink } from '../../../atoms/Link/__types__/Link.type';
import { ReactNode } from 'react';

type Dimensions = {
  height?: number;
  width?: number;
};

export type BgImageSingleType = {
  bp?: string;
  url?: string;
  dimensions?: Dimensions;
  fullscreen?: boolean;
  customImgHeight?: number;
  children?: ReactNode;
};

export type BgImageType = {
  images: Array<BgImageSingleType>;
  title?: string;
  scrollIndicator: boolean;
  children?: ReactNode;
  elmStyle?: string;
  videoMobile?: DocumentLink;
  videoDesktop?: DocumentLink;
};

export type StageContentType = {
  images: Array<BgImageSingleType>;
  children?: ReactNode;
};

export type FullscreenTeaserContentType = {
  images: Array<BgImageSingleType>;
  children?: ReactNode;
};
