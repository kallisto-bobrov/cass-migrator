import type { PrismicHeadline } from '../../../atoms/Headline/__types__/Headline.types';
import type { InternalLink } from '../../../atoms/Link/__types__/Link.type';

export type MSTSprimaryType = {
  ankerlink_titel?: string;
  kapitel: any;
  uberschrift: Array<PrismicHeadline>;
  uberschrift_filter?: string;
  filterlink_title?: string;
  filter_zielseite: InternalLink;
};

export type MSTItemType = {
  zielseite: InternalLink;
  tag: InternalLink;
};

export type MagazinStartseitenTeaserSliceType = {
  primary: MSTSprimaryType;
  items: Array<MSTItemType>;
  slices: number;
  index: number;
};
