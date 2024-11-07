import type { PrismicPictureType } from '../../../atoms/Picture/__types__/Picture.type';

export type ZitatMitPortraitType = {
  quote?: string[];
  authorName?: string;
  image: PrismicPictureType;
  bild_medium: PrismicPictureType;
  bild_gross: PrismicPictureType;
  bildgrosse: 'adaptiv' | 'original';
};
