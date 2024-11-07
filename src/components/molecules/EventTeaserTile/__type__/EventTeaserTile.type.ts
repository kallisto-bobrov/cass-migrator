import type {
  ExternalLink,
  InternalLink,
  LinkType,
} from '../../../atoms/Link/__types__/Link.type';
import type { PrismicHeadline } from '../../../atoms/Headline/__types__/Headline.types';

export type TimeStamp = {
  type: 'Timestamp';
  value: string;
};

export type EventTeaserTileType = {
  teaser_uberschrift: PrismicHeadline;
  teaser_text: string;
  link: InternalLink | ExternalLink;
  teaser_link_text: string;
  link_title: string;
  event_schema_start_date: string;
  event_schema_location_city: string;
  no3dHover?: boolean;
};
