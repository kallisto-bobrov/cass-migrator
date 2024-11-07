import type { PrismicHeadline } from '../../../atoms/Headline/__types__/Headline.types';
import type { InternalLink } from '../../../atoms/Link/__types__/Link.type';

export type FilterLinksBlockType = {
  tags: Array<string>;
  filterlink_title?: string;
  chapter: string;
  headline: PrismicHeadline;
  uberschrift_filter?: string;
  slices: number;
  index: number;
  children: any;
  filter_zielseite: InternalLink;
};
