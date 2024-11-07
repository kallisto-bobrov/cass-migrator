import React from 'react';
import styled from 'styled-components';
import { btnPrimarySkin } from '../../../atoms/Button/Button.skins';
import type { DefaultFormProps } from '../__types__/EventregistrationMaatooForm.type';
import { copyStandard } from '../../../atoms/CopyText/CopyText.skins';
import getDefaultForm from '../MaatooHTMLForms/getDefaultForm';
import getContactForm from '../MaatooHTMLForms/getContactForm';
import mq from '@/styles/mediaQueries/mediaQueries';

const FormWrapper = styled.div`
  &&& {
    strong {
      font-family: ${(props) => props.theme.font.family.secondary};
    }

    .mauticform-position-2 {
      height: 0;
      width: 0;
      overflow: hidden;
    }

    .mauticform-input {
      width: 100%;
    }

    .mauticform-button {
      ${btnPrimarySkin};
      padding: 9px 20px;
    }

    .checkbox-group {
      margin-top: 35px;
    }

    .mauticform-radiogrp-row,
    .mauticform-checkboxgrp-row {
      ${copyStandard};
    }

    label {
      height: auto;

      @media (${mq.smDown}) {
        font-size: 16px;
      }
    }
  }
`;

const DefaultForm = ({
  id,
  formName,
  labelEmail,
  labelFirstName,
  labelName,
  labelCompany,
  labelPhone,
  labelJobtitle,
  labelRequest,
  firstDisclaimerText,
  secondDisclaimerText,
  thirdDisclaimerText,
  cta,
  eventId,
}: DefaultFormProps) => (
  <>
    <FormWrapper
      dangerouslySetInnerHTML={{
        __html:
          formName === 'kontaktformular'
            ? getContactForm({
                formName,
                eventId,
                id,
                cta,
                labelFirstName,
                labelName,
                labelCompany,
                labelPhone,
                labelRequest,
                labelEmail,
                firstDisclaimerText,
                secondDisclaimerText,
                labelJobtitle,
              })
            : getDefaultForm({
                formName,
                eventId,
                id,
                cta,
                labelFirstName,
                labelName,
                labelCompany,
                labelEmail,
                firstDisclaimerText,
                secondDisclaimerText,
                thirdDisclaimerText,
              }),
      }}
    />
  </>
);

export default DefaultForm;
