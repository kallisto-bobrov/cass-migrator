import type { PrismicHeadline } from '../../../atoms/Headline/__types__/Headline.types';
import type { PrismicPictureType } from '../../../atoms/Picture/__types__/Picture.type';
import type { InternalLink } from '../../../atoms/Link/__types__/Link.type';

export type TextTeaserKompositionSlicePrimaryType = {
  ankerlink_titel: string;
  kapitel: string;
  uberschrift: Array<PrismicHeadline>;
  text: Array<any>;
};

export type TextTeaserKompositionSliceItemsType = {
  bild_2_3: PrismicPictureType;
  bild_2_3_title?: string;
  bild_16_9: PrismicPictureType;
  bild_16_9_title?: string;
  kompositionstyp: string;
  zielseite_1: InternalLink;
  zielseite_2: InternalLink;
};

export type TextTeaserKompositionSliceType = {
  primary: TextTeaserKompositionSlicePrimaryType;
  items: Array<TextTeaserKompositionSliceItemsType>;
  slices: number;
  index: number;
};
