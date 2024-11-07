import type { PrismicPictureType } from '../../../atoms/Picture/__types__/Picture.type';

export type ZitatMitPortraitPrimaryType = {
  zitat?: Array<any>;
  beschreibung?: Array<any>;
  author?: string;
  bildgrosse?: 'adaptiv' | 'original';
  bild?: PrismicPictureType;
  bild_medium?: PrismicPictureType;
  bild_gross?: PrismicPictureType;
};

export type ZitatMitPortraitSliceType = {
  primary: ZitatMitPortraitPrimaryType;
};
