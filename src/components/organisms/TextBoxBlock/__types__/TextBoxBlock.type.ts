import type { TextBoxType } from '../../TextBox/__types__/TextBox.type';

export type TextBoxBlockType = {
  items: Array<TextBoxType>;
  sliceName?: string;
};
