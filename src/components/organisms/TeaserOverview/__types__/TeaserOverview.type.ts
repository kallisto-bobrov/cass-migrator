import { InternalLink } from '@/components/atoms/Link/__types__/Link.type';

export type TeaserOverviewType = {
  items: any[];
  teaserType: 'event' | 'download';
  buttonText?: string;
  pageSize?: number;
};
