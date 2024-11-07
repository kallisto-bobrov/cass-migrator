import type { PrismicHeadline } from '../../atoms/Headline/__types__/Headline.types';
import type { PrismicPictureType } from '../../atoms/Picture/__types__/Picture.type';
import type {
  DocumentLink,
  ExternalLink,
  InternalLink,
} from '../../atoms/Link/__types__/Link.type';

export type TeaserIntroType = {
  headline?: PrismicHeadline;
  text?: Array<any>;
  slices?: number;
  index?: number;
  chapter: any;
  textgrosse?: any;
  textColor?: 'standard' | 'primary';
  fullWidth?: boolean;
  bild_klein?: PrismicPictureType;
  bild_medium?: PrismicPictureType;
  bild_gross?: PrismicPictureType;
  bild_position?: 'links' | 'rechts';
  isCTATeaser?: boolean;
  button_text?: string;
  button_title?: string;
  externe_url?: ExternalLink;
  ankerlink_ziel?: string | null;
  zielseite?: InternalLink;
  verlinkung_bild_url?: ExternalLink | InternalLink | DocumentLink;
  verlinkung_link_titel?: string;
};
