import { CalendarLinkTypes } from '@/components/atoms/CalendarLink/__types__/CalendarLink.types';

import type { ExternalLink } from '../../../atoms/Link/__types__/Link.type';

export type TextBlockBanderoleType = {
  ort?: Array<any>;
  datum?: Array<any>;
  zusatzinformation?: Array<any>;
  anmeldelink_text?: string;
  anmeldelink_title?: string;
  anmeldelink?: ExternalLink;
  calendarSummary?: string;
  calendarStartDate?: string;
  calendarEndDate?: string;
} & CalendarLinkTypes;
