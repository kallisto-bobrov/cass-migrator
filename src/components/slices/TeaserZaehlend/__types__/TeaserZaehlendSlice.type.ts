import type { PrismicHeadline } from '../../../atoms/Headline/__types__/Headline.types';

export type TeaserZaehlendPrimaryType = {
  ankerlink_titel: string;
  uberschrift: Array<PrismicHeadline>;
  text: Array<any>;
};

export type TeaserZaehlendItemType = {
  counter_value: number | null;
  counter_unit: string | null;
  color: 'Grün' | 'Schwarz' | 'Grau';
  color_custom: string | null;
  text: Array<any>;
  source: string | null;
};

export type TeaserZaehlendSliceType = {
  primary: TeaserZaehlendPrimaryType;
  items: Array<TeaserZaehlendItemType>;
  index: number;
  slices: any;
};
