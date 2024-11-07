import type { PrismicHeadline } from '../../../atoms/Headline/__types__/Headline.types';
import type { InternalLink } from '../../../atoms/Link/__types__/Link.type';

export type EventsSlicePrimaryType = {
  ankerlink_titel: string;
  kapitel: string;
  uberschrift: Array<PrismicHeadline>;
  text: Array<any>;
  textgrosse?: string;
  tag?: InternalLink;
  show_more?: string;
};

export type EventsSliceType = {
  primary: EventsSlicePrimaryType;
  slices: number;
  index: number;
  store: any;
};
