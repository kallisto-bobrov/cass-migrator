import React from 'react';
import DefaultForm from './DefaultForm.NewsletterMaatooForm';
import type { MaatooApplicationFormProps } from '../__types__/NewsletterMaatooForm.type';

const MaatooApplicationForm = ({
  labelEmail,
  labelFirstName,
  labelName,
  cta,
}: MaatooApplicationFormProps) => (
  <>
    <DefaultForm
      labelEmail={labelEmail}
      labelFirstName={labelFirstName}
      labelName={labelName}
      cta={cta}
      id="4"
      formName="newsletteranmeldung"
    />
  </>
);

export default MaatooApplicationForm;
