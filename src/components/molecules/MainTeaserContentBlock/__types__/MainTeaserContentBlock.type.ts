import type { PrismicHeadline } from '../../../atoms/Headline/__types__/Headline.types';
import type {
  ExternalLink,
  InternalLink,
} from '../../../atoms/Link/__types__/Link.type';

export type MainTeaserContentBlockType = {
  dachzeile?: string;
  uberschrift?: PrismicHeadline;
  text?: Array<any>;
  button_text?: string;
  button_url?: InternalLink | ExternalLink;
  ankerlink_ziel?: string;
  button_title?: string;
  fullWidth?: boolean;
  hasImage?: boolean;
  className?: string;
  smallerHeadline?: boolean;
};
