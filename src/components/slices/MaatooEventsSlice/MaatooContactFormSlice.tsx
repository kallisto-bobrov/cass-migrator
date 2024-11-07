import React, { useContext } from 'react';
import get from 'lodash/get';
import { GlobalConfigContext } from '@/contexts/globalConfig.context';
import EventregistrationMaatooForm from '../../organisms/EventregistrationMaatooForm/EventregistrationMaatooForm';
import SliceWrapper from '../../atoms/SliceWrapper/SliceWrapper';
import colorsMap from '../../../constants/maps/colors.map';
import type { MaatooEventsSliceType } from './__types__/MaatooEventsSlice.type';
import { PrismicHeadline } from '@/components/atoms/Headline/__types__/Headline.types';

const MaatooContactFormSlice = ({ primary }: MaatooEventsSliceType) => {
  const config = useContext(GlobalConfigContext);
  const headline = get(config, 'contact_form_title', [
    { text: 'Kontaktformular', type: 'heading1', spans: [] },
  ] as PrismicHeadline[]);
  const introText = get(config, 'contact_form_intro_text', [
    {
      text: '',
      type: 'paragraph',
      spans: [],
    },
  ]);
  const labelName = get(config, 'contact_form_label_name', 'Name*');
  const labelFirstName = get(config, 'contact_form_label_vorname', 'Vorname*');
  const labelEmail = get(
    config,
    'contact_form_label_email',
    'E-Mail-Adresse*:',
  );
  const labelPhone = get(config, 'contact_form_label_phone', 'Telefonnummer');
  const labelJobtitle = get(config, 'contact_form_jobtitle', 'Jobtitel');
  const labelCompany = get(config, 'contact_form_label_company', 'Unternehmen');
  const labelRequest = get(config, 'contact_form_label_request', 'Anfrage');
  const cta = get(config, 'contact_form_label_cta', 'Jetzt anmelden');
  const firstDisclaimerText = get(config, 'contact_form_disclaimer_1');
  const secondDisclaimerText = get(config, 'contact_form_disclaimer_2');

  if (!firstDisclaimerText || !secondDisclaimerText) return <></>;
  return (
    <SliceWrapper
      bgColor={colorsMap.gray}
      id={get(primary, 'contact_form_anchor_link_id', null)!}
    >
      <EventregistrationMaatooForm
        headline={headline!}
        introText={introText!}
        labelName={labelName}
        labelFirstName={labelFirstName}
        labelJobtitle={labelJobtitle}
        labelEmail={labelEmail}
        labelPhone={labelPhone}
        labelCompany={labelCompany}
        labelRequest={labelRequest}
        firstDisclaimerText={firstDisclaimerText}
        secondDisclaimerText={secondDisclaimerText}
        cta={cta}
        eventId={get(
          primary,
          'contact_form_id',
          'Contant form doesnt have ID from Prismic',
        )}
        formId="10"
        formName="kontaktformular"
      />
    </SliceWrapper>
  );
};

export default MaatooContactFormSlice;
