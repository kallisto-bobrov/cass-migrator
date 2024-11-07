import type { HeadlineType } from '../../../atoms/Headline/__types__/Headline.types';
import { ReactNode } from 'react';

export type SimpleAccordionType = {
  headlineText?: string;
  headlineType?: HeadlineType;
  headlineSkin?: string;
  children: ReactNode;
  collapseAtBreakpoint: Array<string>;
  accordionSkin?: string;
  actualBreakpoint: string;
};
