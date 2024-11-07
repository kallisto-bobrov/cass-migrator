import React, { useContext } from 'react';
import get from 'lodash/get';
import { GlobalConfigContext } from '../../../contexts/globalConfig.context';
import EventregistrationMaatooForm from '../../organisms/EventregistrationMaatooForm/EventregistrationMaatooForm';
import SliceWrapper from '../../atoms/SliceWrapper/SliceWrapper';
import colorsMap from '../../../constants/maps/colors.map';
import type { MaatooEventsSliceType } from './__types__/MaatooEventsSlice.type';

const MaatooEventsSlice = ({ primary }: MaatooEventsSliceType) => {
  const config = useContext(GlobalConfigContext);
  const headline = get(config, 'ea-teaser_uberschrift[0]', undefined);
  const introText = get(config, 'ea-teaser_einleitungstext', undefined);
  const labelName = get(config, 'ea-teaser_label_name', 'Name');
  const labelFirstName = get(config, 'ea-teaser_label_vorname', 'Vorname');
  const labelCompany = get(
    config,
    'ea-teaser_label_unternehmen',
    'Unternehmen',
  );
  const labelEmail = get(
    config,
    'ea-teaser_label_email',
    'E-Mail-Adresse eingeben*:',
  );
  const cta = get(config, 'ea-teaser_cta_text', 'Jetzt anmelden');
  const firstDisclaimerText = get(config, 'ea-teaser_disclaimer_1', undefined);
  const secondDisclaimerText = get(config, 'ea-teaser_disclaimer_2', undefined);
  return (
    <SliceWrapper
      bgColor={colorsMap.gray}
      id={get(primary, 'ankerlink-titel', '')}
    >
      <EventregistrationMaatooForm
        headline={headline}
        introText={introText}
        labelName={labelName}
        labelFirstName={labelFirstName}
        labelCompany={labelCompany}
        labelEmail={labelEmail}
        firstDisclaimerText={firstDisclaimerText}
        secondDisclaimerText={secondDisclaimerText}
        cta={cta}
        eventId={get(
          primary,
          'event_id',
          'keine Event-ID in prismic hinterlegt...',
        )}
        formId="6"
        formName="eventanmeldung"
      />
    </SliceWrapper>
  );
};

export default MaatooEventsSlice;
