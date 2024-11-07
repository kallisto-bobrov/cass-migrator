import type { PrismicPictureType } from '../../../atoms/Picture/__types__/Picture.type';
import type { VideoType } from '../../../atoms/Video/__types__/Video.type';

export type MediengalerieItemType = {
  bild?: PrismicPictureType;
  bildunterschrift?: string;
  youtube_link?: VideoType;
  ankerlink_titel?: string;
};

export type MediengalerieSliceType = {
  items: MediengalerieItemType[];
  primary: MediengalerieItemType[];
};
