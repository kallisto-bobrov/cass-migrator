import type { InternalLink } from '../../../atoms/Link/__types__/Link.type';
import type { BusinessCardCardType } from '../../../molecules/BusinessCard/__types__/BusinessCard.type';

export type AutorPrimaryType = {
  einleitung?: string;
  autor: InternalLink;
};

export type AutorSliceType = {
  primary: AutorPrimaryType;
  items: BusinessCardCardType[];
};
