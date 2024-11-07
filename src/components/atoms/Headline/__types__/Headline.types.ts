import { ReactNode } from 'react';

export type HeadlineType =
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'heading5'
  | 'heading6';

export type HeadlineTypes = {
  children?: ReactNode;
  type?: HeadlineType;
  className?: string;
  skin?: string;
};

export type PrismicHeadline = {
  type?: HeadlineType;
  text?: string;
  spans?: Array<Object>;
};
