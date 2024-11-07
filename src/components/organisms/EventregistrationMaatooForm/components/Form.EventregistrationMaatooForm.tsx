import React from 'react';
import DefaultForm from './DefaultForm.EventregistrationMaatooForm';
import type { MaatooApplicationFormProps } from '../__types__/EventregistrationMaatooForm.type';

const MaatooApplicationForm = ({
  labelEmail,
  labelFirstName,
  labelName,
  labelCompany,
  labelJobtitle,
  labelPhone,
  labelRequest,
  firstDisclaimerText,
  secondDisclaimerText,
  thirdDisclaimerText,
  cta,
  eventId,
  formId,
  formName,
}: MaatooApplicationFormProps) => (
  <>
    <DefaultForm
      labelEmail={labelEmail}
      labelFirstName={labelFirstName}
      labelName={labelName}
      labelCompany={labelCompany}
      labelJobtitle={labelJobtitle}
      labelPhone={labelPhone}
      labelRequest={labelRequest}
      firstDisclaimerText={firstDisclaimerText}
      secondDisclaimerText={secondDisclaimerText}
      thirdDisclaimerText={thirdDisclaimerText}
      cta={cta}
      id={formId}
      formName={formName}
      eventId={eventId}
    />
  </>
);

export default MaatooApplicationForm;
