import type { TextBoxType } from '../../../organisms/TextBox/__types__/TextBox.type';
import type { PrismicHeadline } from '../../../atoms/Headline/__types__/Headline.types';
import type {
  ExternalLink,
  InternalLink,
} from '../../../atoms/Link/__types__/Link.type';

export type TextboxenMitUeberlagerungPrimaryType = {
  ankerlink_titel: string;
  kapitel: string;
  uberschrift: Array<PrismicHeadline>;
  text: Array<any>;
  cta_position: 'rechts' | 'zentriert' | 'links';
  cta_farbe: 'primary' | 'secondary';
  cta_button_text: string | null;
  cta_button_title: string | null;
  cta_zielseite: InternalLink;
  cta_externe_url: ExternalLink;
  cta_ankerlink_ziel: string | null;
};

export type TextboxenMitUeberlagerungSliceType = {
  primary: TextboxenMitUeberlagerungPrimaryType;
  items: Array<TextBoxType>;
  index: number;
  slices: number;
};
