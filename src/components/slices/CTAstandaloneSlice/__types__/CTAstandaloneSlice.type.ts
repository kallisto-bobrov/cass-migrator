import type {
  ExternalLink,
  InternalLink,
} from '../../../atoms/Link/__types__/Link.type';

export type CTAstandalonePrimaryType = {
  ankerlink_titel?: string | null;
  button_text: string | null;
  button_title: string | null;
  position: 'rechts' | 'zentriert' | 'links';
  ankerlink_ziel: string | null;
  zielseite: InternalLink;
  farbe: 'primary' | 'secondary';
  externe_url: ExternalLink;
};

export type CTAstandaloneSliceType = {
  primary: CTAstandalonePrimaryType;
  alwaysFullWidthContainer?: boolean;
};
