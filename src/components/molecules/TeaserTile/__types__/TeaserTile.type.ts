import type {
  ExternalLink,
  InternalLink,
} from '../../../atoms/Link/__types__/Link.type';
import type { PrismicHeadline } from '../../../atoms/Headline/__types__/Headline.types';
import type { PrismicPictureType } from '../../../atoms/Picture/__types__/Picture.type';

export type TeaserTileType = {
  headline?: PrismicHeadline;
  text: Array<any>;
  dachzeile?: string;
  link_text?: string;
  link_title?: string;
  zielseite?: InternalLink;
  bgColor?: any;
  teaser_bild_16_9?: PrismicPictureType;
  teaser_bild_title?: string;
  skin?: string;
  embedUrl?: string;
  externer_link?: string;
  link_whitepaper?: string;
  foreignContentLink?: InternalLink | ExternalLink;
};
