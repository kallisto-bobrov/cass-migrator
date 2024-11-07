import type { InternalLink } from '../../../atoms/Link/__types__/Link.type';

export type FiltersType = {
  tags: Array<string>;
  filterlink_title?: string;
  filter_zielseite: InternalLink;
};
