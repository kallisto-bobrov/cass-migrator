import React from 'react';
import DefaultForm from './DefaultForm.EventregistrationMaatooForm';
import type { MaatooApplicationFormProps } from '../__types__/EventregistrationMaatooForm.type';

const MaatooApplicationForm = ({
  labelEmail,
  labelFirstName,
  labelName,
  labelCompany,
  firstDisclaimerText,
  secondDisclaimerText,
  thirdDisclaimerText,
  cta,
  eventId,
}: MaatooApplicationFormProps) => (
  <>
    <DefaultForm
      labelEmail={labelEmail}
      labelFirstName={labelFirstName}
      labelName={labelName}
      labelCompany={labelCompany}
      firstDisclaimerText={firstDisclaimerText}
      secondDisclaimerText={secondDisclaimerText}
      thirdDisclaimerText={thirdDisclaimerText}
      cta={cta}
      id="8"
      formName="whitepaperdownload"
      eventId={eventId}
    />
  </>
);

export default MaatooApplicationForm;
