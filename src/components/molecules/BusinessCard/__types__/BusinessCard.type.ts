import type { PrismicPictureType } from '../../../atoms/Picture/__types__/Picture.type';

export type BusinessCardCardType = {
  portrait?: PrismicPictureType;
  xing?: string;
  linkedin?: string;
  twitter?: string;
  facebook?: string;
  whatsapp?: string;
  name?: string;
  position?: string;
};

export type BusinessCardType = {
  einleitung?: string;
  items: BusinessCardCardType[];
};
