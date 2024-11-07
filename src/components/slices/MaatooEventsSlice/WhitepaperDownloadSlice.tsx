import React, { useContext } from 'react';
import get from 'lodash/get';
import EventregistrationMaatooForm from '../../organisms/EventregistrationMaatooForm/EventregistrationMaatooForm';
import SliceWrapper from '../../atoms/SliceWrapper/SliceWrapper';
import colorsMap from '../../../constants/maps/colors.map';
import type { MaatooEventsSliceType } from './__types__/MaatooEventsSlice.type';
import { GlobalConfigContext } from '@/contexts/globalConfig.context';

const WhitepaperDownloadSlice = async ({ primary }: MaatooEventsSliceType) => {
  const config = useContext(GlobalConfigContext);
  const headline = get(config, 'wp-teaser_uberschrift[0]', null);
  const introText = get(config, 'wp-teaser_einleitungstext', null);
  const labelName = get(config, 'wp-teaser_label_name', 'Name');
  const labelFirstName = get(config, 'wp-teaser_label_vorname', 'Vorname');
  const labelEmail = get(
    config,
    'wp-teaser_label_email',
    'E-Mail-Adresse eingeben*:',
  );
  const labelCompany = get(
    config,
    'wp-teaser_label_unternehmen',
    'Unternehmen',
  );
  const cta = get(config, 'wp-teaser_cta_text', 'Jetzt anmelden');
  const firstDisclaimerText = get(config, 'wp-teaser_disclaimer_1', null);
  const secondDisclaimerText = get(config, 'wp-teaser_disclaimer_2', null);
  const thirdDisclaimerText = get(config, 'wp-teaser-disclaimer_3', null);

  return (
    <SliceWrapper
      bgColor={colorsMap.gray}
      id={get(primary, 'ankerlink-titel', null)!}
    >
      <EventregistrationMaatooForm
        headline={headline as any}
        introText={introText as any}
        labelName={labelName as any}
        labelFirstName={labelFirstName as any}
        labelEmail={labelEmail as any}
        labelCompany={labelCompany as any}
        firstDisclaimerText={firstDisclaimerText as any}
        secondDisclaimerText={secondDisclaimerText as any}
        thirdDisclaimerText={thirdDisclaimerText as any}
        cta={cta as any}
        eventId={get(
          primary,
          'whitepaper_id',
          'keine Whitepaper-ID in prismic hinterlegt...',
        )}
        formId="8"
        formName="whitepaperdownload"
      />
    </SliceWrapper>
  );
};

export default WhitepaperDownloadSlice;
