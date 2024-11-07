import type { PrismicHeadline } from '../../../atoms/Headline/__types__/Headline.types';

export type EventregistrationMaatooFormType = {
  headline?: PrismicHeadline[];
  introText?: any[];
  firstDisclaimerText?: string;
  secondDisclaimerText?: string;
  thirdDisclaimerText?: string;
  labelName?: string;
  labelFirstName?: string;
  labelCompany?: string;
  labelJobtitle?: string;
  labelEmail?: string;
  labelPhone?: string;
  labelRequest?: string;
  cta?: string;
  eventId?: string;
  formId?: string;
  formName?: string;
};

export type MaatooApplicationFormProps = {
  labelName?: string;
  labelFirstName?: string;
  labelCompany?: string;
  labelJobtitle?: string;
  labelEmail?: string;
  labelPhone?: string;
  labelRequest?: string;
  firstDisclaimerText?: string;
  secondDisclaimerText?: string;
  thirdDisclaimerText?: string;
  cta?: string;
  eventId?: string;
  formId?: string;
  formName?: string;
};

export type DefaultFormProps = {
  labelName?: string;
  labelFirstName?: string;
  labelEmail?: string;
  labelCompany?: string;
  labelJobtitle?: string;
  labelPhone?: string;
  labelRequest?: string;
  firstDisclaimerText?: string;
  secondDisclaimerText?: string;
  thirdDisclaimerText?: string;
  id?: string;
  formName?: string;
  cta?: string;
  eventId?: string;
};

export type FormProps = {
  formName?: string;
  eventId?: string;
  id?: string;
  cta?: string;
  labelFirstName?: string;
  labelName?: string;
  labelCompany?: string;
  labelEmail?: string;
  firstDisclaimerText?: string;
  secondDisclaimerText?: string;
  thirdDisclaimerText?: string;
  labelPhone?: string;
  labelRequest?: string;
  labelJobtitle?: string;
};
