import type { PrismicPictureType } from '../../../atoms/Picture/__types__/Picture.type';

export type VollbildPrimaryType = {
  ankerlink_titel: string;
  bild: PrismicPictureType;
};

export type VollbildSliceType = {
  slices: number;
  index: number;
  primary: VollbildPrimaryType;
};
