import type { PrismicHeadline } from '../../../atoms/Headline/__types__/Headline.types';

export type NewsletterMaatooFormType = {
  headline?: PrismicHeadline[];
  introText?: any[];
  disclaimerText?: any[];
  finePrintText?: any[];
  labelName?: string;
  labelFirstName?: string;
  labelEmail?: string;
  cta?: string;
};

export type MaatooApplicationFormProps = {
  labelName?: string;
  labelFirstName?: string;
  labelEmail?: string;
  cta?: string;
};

export type DefaultFormProps = {
  labelName?: string;
  labelFirstName?: string;
  labelEmail?: string;
  id: string;
  formName: string;
  cta?: string;
};
