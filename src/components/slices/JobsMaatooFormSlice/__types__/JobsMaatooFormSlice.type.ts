import type { PrismicHeadline } from '../../../atoms/Headline/__types__/Headline.types';

export type JobsMaatooFormPrimaryType = {
  headline: Array<PrismicHeadline>;
  id: string;
};

export type JobsMaatooFormType = {
  primary: JobsMaatooFormPrimaryType;
};
