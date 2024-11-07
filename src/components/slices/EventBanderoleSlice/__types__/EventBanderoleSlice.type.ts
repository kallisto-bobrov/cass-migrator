import type { ExternalLink } from '../../../atoms/Link/__types__/Link.type';

export type EventBanderolePrimaryType = {
  anmeldelink?: ExternalLink;
  anmeldelink_text?: string;
  anmeldelink_title?: string;
  ort?: Array<any>;
  datum?: Array<any>;
  zusatzinformation?: Array<any>;
};

export type EventBanderoleSliceType = {
  primary: EventBanderolePrimaryType;
};
