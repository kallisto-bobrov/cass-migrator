import type { PrismicHeadline } from '../../../atoms/Headline/__types__/Headline.types';
import type { TextBoxType } from '../../../organisms/TextBox/__types__/TextBox.type';

export type TextboxenSchmuckbilderPrimaryType = {
  ankerlink_titel: string;
  kapitel: any;
  uberschrift: Array<PrismicHeadline>;
  text: Array<any>;
};

export type TextboxenSchmuckbilderSliceType = {
  primary: TextboxenSchmuckbilderPrimaryType;
  items: Array<TextBoxType>;
  index: number;
  slices: number;
};
