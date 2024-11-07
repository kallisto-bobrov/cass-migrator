import type { PrismicPictureType } from '../../../atoms/Picture/__types__/Picture.type';
import type { TextBoxType } from '../../TextBox/__types__/TextBox.type';

export type TextboxenSchmuckbilderBlockType = {
  tiles: Array<TextBoxType>;
  image2to3: PrismicPictureType;
  image2to3_title?: string;
  image16to9: PrismicPictureType;
  image16to9_title?: string;
};

export type TextboxenSchmuckbilderLeftBlockType = {
  tiles: Array<TextBoxType>;
  image16to9: PrismicPictureType;
  image16to9_title?: string;
};

export type TextboxenSchmuckbilderRightBlockType = {
  tiles: Array<TextBoxType>;
  image2to3: PrismicPictureType;
  image2to3_title?: string;
};
