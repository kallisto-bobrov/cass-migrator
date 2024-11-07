import type { InternalLink } from '../../../atoms/Link/__types__/Link.type';

export type TeaserTilesBlockItemType = {
  zielseite: InternalLink;
  teaser_farbe: string;
};

export type TeaserTilesBlockType = {
  items: Array<TeaserTilesBlockItemType>;
};
