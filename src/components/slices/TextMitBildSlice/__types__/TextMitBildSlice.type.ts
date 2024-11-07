import type { PrismicHeadline } from '../../../atoms/Headline/__types__/Headline.types';
import type { PrismicPictureType } from '../../../atoms/Picture/__types__/Picture.type';
import type { MediengalerieItemType } from '../../MediengalerieSlice/__types__/MediengalerieSlice.type';

export type TextMitBildItemType = {
  bild?: PrismicPictureType;
  text: any;
};

export type TextMitBildPrimaryType = {
  ankerlink_titel: string;
  kapitel: string;
  uberschrift: Array<PrismicHeadline>;
};

export type TextMitBildSliceType = {
  items: Array<TextMitBildItemType>;
  primary: TextMitBildPrimaryType;
  slices: number;
  index: number;
};

export type TextImageType = {
  item: TextMitBildSliceType;
};

export type MediaSlideType = {
  item?: MediengalerieItemType;
};
