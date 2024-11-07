import type { TextTeaserKompositionSliceItemsType } from '../../../slices/TextTeaserKompositionSlice/__types__/TextTeaserKompositionSlice.type';
import type { InternalLink } from '../../../atoms/Link/__types__/Link.type';
import type { PrismicPictureType } from '../../../atoms/Picture/__types__/Picture.type';
import { ReactNode } from 'react';

export type TextTeaserKompositionType = {
  items: Array<TextTeaserKompositionSliceItemsType>;
};

export type ColTtkType = {
  children: ReactNode;
};

export type TwoTeaserTtkType = {
  teaser_one: InternalLink;
  teaser_two: InternalLink;
};

export type TwoTeaserVerticalImgType = {
  teaser_one: InternalLink;
  teaser_two: InternalLink;
  bild_2_3: PrismicPictureType;
  bild_2_3_title?: string;
};

export type OneTeaserImgType = {
  teaser_one: InternalLink;
  bild_16_9: PrismicPictureType;
  bild_16_9_title?: string;
};
