import type { InternalLink } from '../../../atoms/Link/__types__/Link.type';

export type VollbildBildTextTeaserPrimaryType = {
  ankerlink_titel: string;
  kapitel: string;
  zielseite: InternalLink;
};

export type VollbildBildTextTeaserSliceType = {
  slices: number;
  index: number;
  primary: VollbildBildTextTeaserPrimaryType;
};
